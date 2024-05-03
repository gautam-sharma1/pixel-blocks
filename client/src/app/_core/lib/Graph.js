export default class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
    this.sourceNode = null;
    this.compileSteps = [];
    this.graph = [];
    this.graphAdjacenyList = {};
    this.allowedEdges = {
      input: ["output", "filter", "operation"],
      filter: ["output", "filter", "detector"],
      detector: ["output", "filter"],
      operation: ["output", "filter", "detector", "operation"],
    };
    this.busy = false;
    this.inputImage = null;
    this.outputURL = null;
    this.error = null;
  }

  setInputImage(image) {
    this.inputImage = image;
  }

  addEdge(edge) {
    this.edges.push(edge);
  }

  addNode(node) {
    this.nodes.push(node);
  }
  setNodes(nodes) {
    this.nodes = nodes;
  }

  setEdges(edges) {
    this.edges = edges;
  }

  setOutputURL(url) {
    this.outputURL = url;
  }

  findNextNeighbor(currNode) {
    const child = this.graphAdjacenyList[currNode.id];
    // Recursion base case
    if (child._type === "image_output") {
      this.graph.push(child);
      return;
    }

    this.graph.push(child);

    this.findNextNeighbor(child);
  }

  async constructUniDirectionalGraph() {
    for (const id in this.graphAdjacenyList) {
      const node = this.nodes.filter((node) => node.id === id);
      if (node[0].collapsible) {
        this.graphAdjacenyList[id]._user_data.result = await this.readImageData(
          node[0]._user_data.image
        );
      }
    }

    this.graph.push(this.sourceNode);
    this.findNextNeighbor(this.sourceNode);
    // traversal done

    console.log("graph is: ", this.graph);
  }

  async _precompile() {
    this.busy = false;
    this.graph = [];
    this.compileSteps = [];
    this.error = null;
    this.graphAdjacenyList = {};
    if (this.nodes && this.edges) {
      for (const edge of this.edges) {
        debugger;
        const sourceID = edge.source;
        const targetID = edge.target;
        const sourceNode = this.nodes.filter((node) => node.id === sourceID);
        const targetNode = this.nodes.filter((node) => node.id === targetID);
        const sourceNodeType = sourceNode[0]._base_type;
        const targetNodeType = targetNode[0]._base_type;
        this.graphAdjacenyList[sourceID] = targetNode[0];
        if (sourceNode[0]._type === "image_input") {
          this.sourceNode = sourceNode[0];
          //debugger;
          if (sourceNode[0]._user_data?.image) {
            const imageData = await this.readImageData(
              sourceNode[0]._user_data.image
            );
            sourceNode[0].imageAsBytes = imageData;
          } else {
            this.error = "Please upload an image";
            return false;
          }
        }
        // if(targetNode[0]._type === "image_output"){
        //     this.endNodeId = targetID;
        // }
        if (this.isValidEdge(sourceNodeType, targetNodeType)) {
          this.compileSteps.push([sourceNode[0], targetNode[0]]);
        } else {
          this.error = `Invalid edge from ${sourceNode[0].label} to ${targetNode[0].label}`;
          return false;
        }
      }
    }
    return true;
  }

  isValidEdge(sourceNodeType, targetNodeType) {
    const allowedEdges = this.allowedEdges[sourceNodeType];
    return allowedEdges.includes(targetNodeType);
  }

  async sendRequestToBackend() {
    debugger;
    return fetch("http://127.0.0.1:8000/compile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.graph),
      mode: "cors", // Include CORS-related headers in the request
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.error) {
          this.error = data.error;
          console.log(this.error);
        } else {
          return data.image;
        }

        // return data.image;
        // You can perform additional actions with the image data here
      });
  }

  async readImageData(imageFile) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onload = () => {
        const imageDataUrl = reader.result;
        const imageData = imageDataUrl.split(",")[1]; // Remove the "data:image/jpeg;base64," part
        resolve(imageData);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  }

  async compile() {
    const status = await this._precompile();
    if (!status) {
      return [false, null];
    }

    await this.constructUniDirectionalGraph();

    // for (let idx = 0; idx < this.compileSteps; ++idx) {
    //   const [sourceNode, targetNode] = this.compileSteps[idx];
    // }

    const image = await this.sendRequestToBackend();
    if (image) {
      return [true, image]; // TODO change
    }
    return [false, null];
  }
}
