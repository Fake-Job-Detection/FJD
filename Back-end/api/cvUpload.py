import pyrebase

config = {
    "apiKey": "AIzaSyCviAjC1G0OSRpxuVK6LTvkpPYUHJTfHa0",
    "authDomain": "fjd-backend.firebaseapp.com",
    "databaseURL": "https://fjd-backend-default-rtdb.firebaseio.com",
    "projectId": "fjd-backend",
    "storageBucket": "fjd-backend.appspot.com",
    "messagingSenderId": "176438699742"
}

firebase = pyrebase.initialize_app(config)

storage = firebase.storage()

from flask import *

cvUpload = Blueprint('cvUpload', __name__, url_prefix='/api')


@cvUpload.route('/home', methods=['GET', 'POST'])
def basic():
    if request.method == 'POST':
        upload = request.files['upload']
        storage.child("images/new.mp4").put(upload)
        return redirect(url_for('uploads'))
    return render_template('CvHome.html')


@cvUpload.route('/uploads', methods=['GET', 'POST'])
def uploads():
    if request.method == 'POST':
        return redirect(url_for('basic'))
    if True:
        links = storage.child('images/new.mp4').get_url(None)
        return render_template('upload.html', l=links)
    return render_template('upload.html')


# if __name__ == '__main__':
#     app.run(debug=True)
