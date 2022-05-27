from flask import Flask, render_template
import os

 
app = Flask(__name__) 

@app.route('/about', methods=['GET'])
def index():
    return render_template("profile_page.html")
 
app.run(port = 8080, host = "localhost")
