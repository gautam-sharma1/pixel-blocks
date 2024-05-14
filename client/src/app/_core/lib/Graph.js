/* The `Graph` class in JavaScript represents a graph data structure with methods for constructing a
unidirectional graph, compiling the graph, and sending requests to a backend server. */

// This gets called on every request
export async function getServerSideProps() {
    console.log(process.env.NEXT_PUBLIC_SERVER_COMPILE_URL)
}


export default class Graph {
  /**
   * The constructor function initializes properties for a graph data structure.
   */
  constructor() {
    this.nodes = [];
    this.edges = [];
    this.sourceNode = null;
    this.compileSteps = [];
    this.graph = [];
    this.graphAdjacenyList = {};
    this.nodeTypes = {};
    this.allowedEdges = {
      input: ["output", "filter", "operation", "detector"],
      filter: ["output", "filter", "detector", "operation"],
      detector: ["output", "filter", "detector", "operation"],
      operation: ["output", "filter", "detector", "operation"],
    };
    this.busy = false;
    this.error = null;
  }

  /**
   * The setNodes function assigns a given array of nodes to the nodes property of an object.
   * @param nodes - The `setNodes` function is used to set the `nodes` property of an object to the
   * value passed as an argument. The `nodes` parameter represents the value that will be assigned to
   * the `nodes` property.
   */
  setNodes(nodes) {
    this.nodes = nodes;
  }
  /**
   * The setEdges function assigns the value of the edges parameter to the edges property of the object.
   * @param edges - Edges typically refer to the connections between nodes in a graph data structure.
   * These connections define the relationships between the nodes. When you set the edges in a graph data
   * structure, you are specifying how the nodes are connected to each other.
   */

  setEdges(edges) {
    this.edges = edges;
  }

  /**
   * The function `findNextNeighbor` recursively traverses a graph starting from a given node until it
   * reaches a node of type "image_output".
   * @param currNode - `findNextNeighbor` function is a recursive function that
   * traverses a graph based on adjacency list representation. The `currNode` parameter represents the
   * current node being processed in the graph traversal. The function recursively explores the neighbors
   * of the current node until it reaches a node of type "image_output"
   * @returns The `findNextNeighbor` function is a recursive function that
   * traverses a graph represented by an adjacency list. When the function reaches a node with `_type`
   * equal to "image_output", it pushes that node to the `graph` array and returns. If the node is not an
   * "image_output" node, it pushes the current node to the `graph` array
   */
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

  /**
   * The function constructUniDirectionalGraph asynchronously constructs a unidirectional graph based on
   * the adjacency list and node properties, including reading image data for collapsible nodes.
   */
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

  /**
   * The function `_precompile` initializes variables, processes edges between nodes, and handles image
   * data based on node types.
   * @returns The function `_precompile()` returns a boolean value - `true` if the precompilation process
   * is successful, and `false` if there is an error encountered during the process.
   */
  async _precompile() {
    this.busy = false;
    this.graph = [];
    this.compileSteps = [];
    this.error = null;
    this.graphAdjacenyList = {};
    if (this.nodes.length>0 && this.edges.length>0) {
      for (const edge of this.edges) {
        const sourceID = edge.source;
        const targetID = edge.target;
        const sourceNode = this.nodes.filter((node) => node.id === sourceID);
        const targetNode = this.nodes.filter((node) => node.id === targetID);
        const sourceNodeType = sourceNode[0]._base_type;
        const targetNodeType = targetNode[0]._base_type;

        // source node ---> target node
        this.graphAdjacenyList[sourceID] = targetNode[0];
        if (!sourceNode._type in this.nodeTypes) {
          this.nodeTypes[sourceNode._type] = 0;
        } else {
          this.nodeTypes[sourceNode._type] += 1;
        }

        if (sourceNode[0]._type === "image_input") {
          this.sourceNode = sourceNode[0];
          if (sourceNode[0]._user_data?.image) {
            const imageData = await this.readImageData(
              sourceNode[0]._user_data.image
            );
            sourceNode[0].imageAsBytes = imageData;
          } else {
            this.error = "Please upload an image";
            return false;
          }
        } else if (sourceNode[0]._type === "secondary_image_input") {
          if (sourceNode[0]._user_data?.image) {
          } else {
            this.error =
              "Please upload an image in the Secondary Image Input Block";
            return false;
          }
        }
        if (this.isValidEdge(sourceNodeType, targetNodeType)) {
          // this.compileSteps.push([sourceNode[0], targetNode[0]]);
        } else {
          this.error = `Invalid edge from ${sourceNode[0].label} to ${targetNode[0].label}`;
          return false;
        }
      }
    }
    else{
        this.error = "No block found!"
        return false;
    }
    return true;
  }

  /**
   * The _validator function checks the number of image_input and image_output nodes in a graph and
   * returns an error message if the count is not as expected.
   * @returns The _validator() function returns a boolean value. It returns true if the conditions for
   * the number of "image_input" and "image_output" nodes are met, and it returns false with an error
   * message if any of the conditions are not met.
   */
  _validator() {
    // Validate number of image_input nodes
    // Validate number of image_output nodes
    if (this.nodeTypes["image_input"] > 1) {
      this.error = `Only 1 Image Input Block is allowed to be present in the graph!`;
      return false;
    } else if (this.nodeTypes["image_input"] < 1) {
      this.error = `Image Input Block missing. Please add an Image Input Block and try again!`;
      return false;
    } else if (this.nodeTypes["image_output"] < 1) {
      this.error = `Image Output Block missing. Please add an Image Output Block and try again!`;
      return false;
    } else if (this.nodeTypes["image_output"] > 1) {
      this.error = `Only 1 Image Output Block is allowed to be present in the graph!`;
      return false;
    }
    return true;
  }

  /**
   * The isValidEdge function checks if there is a valid edge between a given source node type and target
   * node type based on allowed edges.
   * @param sourceNodeType - Source node type is the type of the starting node in a graph or network.
   * @param targetNodeType - The `targetNodeType` parameter in the `isValidEdge` function represents the
   * type of node that the edge is pointing to from the source node. The function checks if there is a
   * valid edge between the `sourceNodeType` and the `targetNodeType` based on the allowed edges defined
   * for the `source
   * @returns The function `isValidEdge` is returning a boolean value indicating whether there is a valid
   * edge between the `sourceNodeType` and `targetNodeType`.
   */
  isValidEdge(sourceNodeType, targetNodeType) {
    const allowedEdges = this.allowedEdges[sourceNodeType];
    return allowedEdges.includes(targetNodeType);
  }

  /**
   * The function `sendRequestToBackend` sends a POST request to a specified URL with JSON data, handles
   * the response, and returns an image if successful or sets an error message if there is an error.
   * @returns The `sendRequestToBackend` function is returning the `data.image` if there is no error in
   * the response from the backend.
   */
  async sendRequestToBackend(url) {
    // Set a timeout promise
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
      const error = new Error("Request timed out");
      this.error = "Server error! try again";
      console.log(this.error);
      resolve({ timeout: true });
      }, 10000); // 10 seconds timeout
    });

    // Fetch request
    const fetchPromise = fetch(url, {
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
      })
      .catch((e)=>{
        this.error = "Server error! try again";
      })
    // Race between fetch and timeout promises
    return Promise.race([fetchPromise, timeoutPromise]);
  }

  /**
   * The `readImageData` function asynchronously reads an image file and resolves with the base64-encoded
   * image data.
   * @param imageFile - The `imageFile` parameter in the `readImageData` function is expected to be a
   * File object representing the image file that you want to read and convert into a base64 encoded
   * string.
   * @returns The `readImageData` function returns a Promise that resolves with the image data (base64
   * encoded) extracted from the provided image file.
   */
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

  async compile(url) {
    url = ""
    // Precompile
    const status = await this._precompile();
    if (!status) {
      return [false, null];
    }
    // Perform validation
    const validationStatus = this._validator();
    if (!validationStatus) {
      return [false, null];
    }
    // Construct the graph
    await this.constructUniDirectionalGraph();

    // Send request to the backend and wait for the result
    const image = await this.sendRequestToBackend(url);
    if (image) {
      return [true, image]; // TODO change
    }
    return [false, null];
  }
}
