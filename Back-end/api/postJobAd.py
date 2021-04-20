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

db = firebase.database()

from flask import *

app = Flask(__name__)

postJobAd = Blueprint('postJobAd', __name__, url_prefix='/api')

@postJobAd.route('/', methods=['GET', 'POST'])
def basic():
	if request.method == 'POST':
		if request.form['submit'] == 'add':

			name = request.form['name']
			db.child("todo").push(name)
			todo = db.child("todo").get()
			to = todo.val()
			return render_template('index.html', t=to.values())
		elif request.form['submit'] == 'delete':
			db.child("todo").remove()
		return render_template('index.html')
	return render_template('index.html')

# if __name__ == '__main__':
# 	app.run(debug=True)


