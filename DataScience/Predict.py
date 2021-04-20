import pickle
from Exceptionhandling import handle


def load_model_predict(data):
    try:
        X_test = data.drop('fraudulent',axis = 1)
        y_test = data['fraudulent']

        scaler = pickle.load( open( "model/scaler.p", "rb" ) )
        X_test = scaler.transform(X_test)

        filename = 'model/finalized_model.p'
        model = pickle.load(open(filename, 'rb'))

        y_pred = model.predict(X_test)
        score_and_save(y_pred)
    except Exception as e:
        handle('prediction process')