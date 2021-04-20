from Dataread import read_csv
from DataHandling import missing_values
from DataHandling import texthandling
from DataHandling import categorical_cols_test
from Predict import load_model_predict
from Exceptionhandling import handle


def testing():
    try:
        data = read_csv('Data/test.csv')

        (data.pipe(missing_values).pipe(texthandling)
             .pipe(categorical_cols_test).pipe(load_model_predict))

    except Exception as e:
        handle('testing process')
