

import firebase_admin
from firebase_admin import credentials, firestore
from firebase_admin import db
from flask import Flask, render_template, request


app = Flask(__name__)
cred = credentials.Certificate('C:/Users/MAC/Desktop/SDGPFINAL/FJD/Back-end/flask1.json')

firebase_admin.initialize_app(cred)

db=firestore.client()

doc_ref=db.collection("company").document("rating")

doc_ref.set({
    "name":'fae',
    'rating': 5

})


# creating the database field
# company_ref = ref.child('company')



@app.route('/')
def index():
    return render_template('index5.html')


@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        rating = request.form['rating']
        print( rating,doc_ref)

        # Validtion checks
        if rating == "":
            return render_template('index5.html')



        # Runs if above is not true
        # like an else stmt
        return render_template('index5.html', message='You have already submitted feedback!!')


if __name__ == '__main__':
    app.debug = True
    app.run()
