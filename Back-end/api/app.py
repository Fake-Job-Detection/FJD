import pyrebase
from flask import Flask,redirect, render_template, request, url_for

app = Flask(__name__)  # Initialze flask constructor
config = {
    "apiKey": "AIzaSyA4I37TaYN7Ixo8L53g_kBts_hNyWTEPFE",
    " authDomain": "backend1-55251.firebaseapp.com",
    "projectId": "backend1-55251",
    "storageBucket": "backend1-55251.appspot.com",
    "messagingSenderId": "265327075971",
    "appId": "1:265327075971:web:9db9a820815d113295b1b6",
    " measurementId": "G-VPGYWLZ7K2"
}

# initialize firebase
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()

# Initialze person as dictionary
person = {"is_logged_in": False, "email": "", "uid": ""}


# Login
@app.route("/result")
def login():
    return render_template("login.html")


# Sign up/ Register
@app.route("/signup")
def signup():
    return render_template("signup.html")


# Welcome page
@app.route("/welcome")
def welcome():
    if person["is_logged_in"]:
        return render_template("welcome.html", email=person["email"],)
    else:
        return redirect(url_for('login'))


@app.route("/result", methods=["POST", "GET"])
def result():
    if request.method == "POST":  # Only if data has been posted
        result = request.form  # Get the data
        email = result["email"]
        password = result["pass"]
        try:
            user = auth.sign_in_with_email_and_password(email, password)

            return redirect(url_for('welcome'))
        except:
            # If there is any error, redirect to register
            return redirect(url_for('signup'))


# If someone clicks on register, they are redirected to /register
@app.route("/register", methods=["POST", "GET"])
def register():
    if request.method == "POST":  # Only listen to POST
        result = request.form  # Get the data submitted
        email = result["email"]
        password = result["pass"]
        try:
            # Try creating the user account using the provided data
            user = auth.create_user_with_email_and_password(email, password)
            auth.send_email_verification(user['idToken'])

            return redirect(url_for('welcome'))
        except:
            # If there is any error, redirect to register
            return redirect(url_for('register'))

    else:
        if person["is_logged_in"] == True:
            return redirect(url_for('welcome'))
        else:
            return redirect(url_for('register'))


if __name__ == "__main__":
    app.run()
