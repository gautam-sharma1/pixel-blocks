"""
Copyright © 2024 Gautam Sharma

This work is licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives License.

You are free to:
- Share — copy and redistribute the material in any medium or format

Under the following terms:
- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- NonCommercial — You may not use the material for commercial purposes.
- NoDerivatives — If you remix, transform, or build upon the material, you may not distribute the modified material.

Permissions beyond the scope of this license may be available at gsharma2813@gmail.com.
"""

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
def compile():
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

        return make_response(jsonify({'image': image_str}), 200)

    elif out["error"] is not None:
        return make_response(jsonify({'error': out["error"]}), 200)

    return make_response(jsonify({'error': "Try again"}), 200)

@app.route("/test",methods = ['POST'])
@cross_origin()
def test():
    return make_response(jsonify({'status': "Success"}), 200)


if __name__ == '__main__':
   app.run(port=8000)