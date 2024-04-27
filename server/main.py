from flask import Flask,jsonify
from flask import request, make_response
import base64
from flask_cors import CORS,cross_origin
import json
from actions.input.image_input import ImageInput
from actions.filter.sobel_filter import SobelFilter
from Dispatcher import Dispatcher
import cv2

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

d = Dispatcher()

@app.route("/compile",methods = ['POST'])
@cross_origin()
def hello_world():
    print('got a request')
    req_data = request.data
    blocks_as_unidirected_graph = json.loads(req_data)

    if len(blocks_as_unidirected_graph) == 0:
        return make_response(jsonify({'error': "Received empty data"}), 200)


    out = d.compile_and_run(blocks_as_unidirected_graph)

    if out["out"] is not None:

    # Convert the image to a base64-encoded string
        retval, buffer = cv2.imencode('.jpg', out["out"])
        image_str = base64.b64encode(buffer).decode()

        # with open('image.jpg', 'wb') as file:
        #     file.write(image_bytes)

        return make_response(jsonify({'image': image_str}), 200)

    elif out["error"] is not None:
        return make_response(jsonify({'error': out["error"]}), 200)

    # out1 = ImageInput.perform_action(d1)
    # out2 = SobelFilter.perform_action(d2, out1)

    return make_response(jsonify({'error': "Try increasing the filter size or reducing the derivative"}), 200)
    # # Convert the image to a base64-encoded string
    # retval, buffer = cv2.imencode('.jpg', out2)
    # image_str = base64.b64encode(buffer).decode()
    #
    # # with open('image.jpg', 'wb') as file:
    # #     file.write(image_bytes)
    #
    # return make_response(jsonify({'image': image_str}), 200)



if __name__ == '__main__':
   app.run(port=8000)