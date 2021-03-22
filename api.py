from flask import Flask, render_template
import pickle

app = Flask(__name__)

@app.route('/' , methods =['GET','POST'] )
def home():
    return render_template('FJD.html')
    if request.method =='POST':
        model = pickle.load(open('model/Model.py'))
        user_input=request.form.get('Company name','')
        print(user_input,type(user_input))
        prediction= model.predict([[user_input]])
        print(prediction)
if __name__=='__main__':
    app.run(debug =  True)
