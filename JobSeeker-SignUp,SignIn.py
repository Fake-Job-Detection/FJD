import pyrebase

#Configure and Connext to Firebase

firebaseConfig = {
    'apiKey': "AIzaSyARL0AF0w2mbhDrvBE28lW_AMZJVpq0ank",
    'authDomain': "cpanel-d6111.firebaseapp.com",
    'projectId': "cpanel-d6111",
    'storageBucket': "cpanel-d6111.appspot.com",
    'messagingSenderId': "726427465115",
    'appId': "1:726427465115:web:7457da4da5ecf2f63cdd3e",
    'measurementId': "G-T7E6Y0B3VZ"
  }

firebase=pyrebase.initialize_app(firebaseConfig)
auth=firebase.auth()

#Login function

def Signin():
    print("JOB SEEKER-Sign in...")
    email=input("Enter email: ")
    password=input("Enter password: ")
    try:
        login = auth.sign_in_with_email_and_password(email, password)
        print("Successfully logged in!")

    except:
        print("Invalid email or password")
    return

#Signup Function

def signup():
    print("JOB SEEKER-Sign up...")
    email = input("Enter email: ")
    password=input("Enter password: ")
    try:
        user = auth.create_user_with_email_and_password(email, password)
        ask=input("Do you want to login?[y/n]")
        if ask=='y':
            login()
    except:
        print("Email already exists")
    return

#Main

ans=input("Are you a new user?[y/n]")

if ans == 'n':
    login()
elif ans == 'y':
    signup()