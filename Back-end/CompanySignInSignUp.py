
import pyrebase
firebaseConfig = {
    'apiKey': "AIzaSyAJHH6W-wPJ5h525pGKW6PTQUsIAJsdmqk",
    'authDomain': "fake1-7d4d7.firebaseapp.com",
    'projectId': "fake1-7d4d7",
    'storageBucket': "fake1-7d4d7.appspot.com",
    'messagingSenderId': "62184660318",
     'appId': "1:62184660yn318:web:f5eea86cd684fa566e43cf",
    'measurementId': "G-CTDY8M1XB4"}

firebase = pyrebase.initialize_app(firebaseConfig)
auth=firebase.auth()


#Company Login function

def login():
    print("Company Log in...")
    email = input("Enter Company email: ")
    password = input("Enter password: ")
    try:
        login = auth.sign_in_with_email_and_password(email, password)
        print("Successfully logged in!")

    except:
        print("Invalid email or password")
    return


# Company  Signup Function

def signup():
    print(" Company  Sign up...")
    email = input("Enter Company email: ")
    password = input("Enter password: ")
    try:

        user = auth.create_user_with_email_and_password(email, password)
        ask = input("Do you want to login?[y/n]")
        if ask == 'y':
            login()
    except:
        print("Email alyready exists")
    return


# Main

ans = input("Are you a new user?[y/n]")

if ans == 'n':
    login()
elif ans == 'y':
    signup()