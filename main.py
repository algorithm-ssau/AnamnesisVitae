from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class Main(Resource):
    def get(self):
        return {'hello': 'world','hello': 'world','hello': 'world','hello': 'world'}

api.add_resource(Main, '/api/getName')

if __name__ == '__main__':
    app.run(debug=True,host="localhost",port = 3000)