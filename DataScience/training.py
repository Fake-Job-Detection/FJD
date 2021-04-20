from Dataread import read_csv
from DataHandling import missing_values
from DataHandling import texthandling
from DataHandling import categorical_cols_train
from model.Model import train_and_save_model
from Exceptionhandling import handle


def training():
    try:
        data = read_csv('Data/train.csv')

        (data.pipe(missing_values).pipe(texthandling)
             .pipe(categorical_cols_train).pipe(train_and_save_model))

    except Exception as e:
        handle("Training piepline")
