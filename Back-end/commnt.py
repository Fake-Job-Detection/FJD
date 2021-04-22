import os
from _weakref import ref
import firebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from flask import Flask, render_template, request






app = Flask(__name__)
cred = credentials.Certificate("C://Users//Disney//3D Objects//SDGP//FJD//Back-end//flask1.json")
firebase_admin.initialize_app(cred)

# creating the database field
# company_ref = ref.child('company')

template_dir = os.path.abspath('templates')
# commnt = Blueprint('commnt', _name_, url_prefix='/api')



class Feedback():
    tablename = 'feedback'


    # initializer//constructor
    def _init_(self, rating):
        self.rating = rating



@app.route('/')
def index():
    return render_template('index5.html')


@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        rating = request.form['rating']
        # print(customer, dealer, rating, comments)

        # Validtion checks
        if rating == '':
            return render_template('index5.html')

        # Quering  from the Model if the customer already exists
        if db.session.query(Feedback).filter(Feedback.rating== rating).count() == 0:
            data = Feedback( rating)
            db.session.add(data)
            db.session.commit()
            return render_template('success.html')

        # Runs if above is not true
        # like an else stmt
        return render_template('index5.html', message='You have already submitted feedback!!')


if __name__ == '__main__':
    app.run(debug=True)