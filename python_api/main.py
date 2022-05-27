from flask import Flask, render_template
from pymongo import MongoClient



 
app = Flask(__name__) 

@app.route('/about', methods=['GET'])
def index():
    cluster = MongoClient("mongodb+srv://admin:root@cluster0.ffidn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    db = cluster["myFirstDatabase"]
    collection = db['users']
    passed = collection.count_documents({"answers":{"$ne":' '}, "accountType": False})
    not_passed = collection.count_documents({"answers":' ', "accountType": False})
    return render_template("statistics.html",passed = passed,not_passed = not_passed)
 
app.run(port = 8080, host = "localhost")
