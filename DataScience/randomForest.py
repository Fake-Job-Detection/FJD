import pickle
import pandas as pd

class RandomForestClassifier:
    def __init__(self):
        self.values_fill_missing = pickle.load(open("model/scaler.p", "rb"))
        self.encoders = pickle.load(open("model/encoder.p", "rb"))
        self.model = pickle.load(open("model/finalized_model.p", "rb"))

    def preprocessing(self, input_data):
        # JSON to pandas DataFrame
        input_data = pd.DataFrame(input_data, index=[0])
        # fill missing values
        input_data.fillna(self.values_fill_missing)
        # convert categoricals
        for column in [
            "title",
            "location",
            "department",
            "salary_range",
            "company_profile",
            "description",
            "requirements",
            "benefits",
            "telecommuting",
            "has_company_logo",
            "has_questions",
            "employment_type",
            "required_experience",
            "required_education",
            "industry",
            "function",

        ]:
            categorical_convert = self.encoders[column]
            input_data[column] = categorical_convert.transform(input_data[column])

        return input_data

    def predict(self, input_data):
        return self.model(input_data)

    def postprocessing(self, input_data):
        label = "job false"
        if input_data[1] > 0.5:
            label = "job true"
        return {"probability": input_data[1], "label": label}

    def compute_prediction(self, input_data):
        try:
            input_data = self.preprocessing(input_data)
            prediction = self.predict(input_data)[0]  # only one sample
            prediction = self.postprocessing(prediction)
        except Exception as e:
            return {"status": "Error", "message": str(e)}

        return prediction
