import os

import firebase_admin
from firebase_admin import credentials, initialize_app, storage
# Init firebase with your credentials


# Init firebase with your credentials
from flask import render_template, Flask, request, redirect
from oauth2client import file

cred = credentials.Certificate("flask1.json")
firebase_admin.initialize_app(cred, {'storageBucket': 'backend1-55251.appspot.com/data'})

application = Flask(__name__)

# cred = credentials.Certificate("flask1.json")
# firebase_admin.initialize_app(cred)
UPLOAD_FOLDER = os.path.dirname(os.path.abspath(__file__))
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@application.route("/up", methods=['GET', 'POST'])
def index(df=None):
    if request.method == 'POST':
        if 'file' not in request.files:
            print('No file attached in request')
            return redirect(request.url)
        file = request.files['file']
        if file.filename == '':
            print('No file selected')
            return redirect(request.url)
        if file and allowed_file(file.filename):

            bucket = storage.bucket()
            blob = bucket.blob(file)
            blob.upload_from_filename(file)

            # Opt : if you want to make public access from the URL
            blob.make_public()

            print("backend1-55251.appspot.com/data", blob.public_url)


    return render_template('ex2.html')



if __name__ == "__main__":
    application.debug = True
    application.run(host='0.0.0.0')