import panda as pd

df.drop('has_questions',axis=1)

//Removing  
def removeSymbol(text):
    try:
        text = re.sub('[%s]'%re.escape(string.punctuation), '', str(text))
        text = re.sub('\w*\d\w*', '', str(text))
        text = re.sub('[^a-zA-Z ]+', ' ', str(text))

        return text
    except Exception as e:
        handle('removing unnecessary text, change2')

