import re
import string
import math
import pandas as pd
from nltk.cluster import cosine_distance
from sklearn.model_selection import train_test_split
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer
from nltk.probability import FreqDist
from nltk.corpus import wordnet
import category_encoders as ce
import pickle
from Allcodefiles.Exceptionhandling import handle

stop_words = set(stopwords.words('english'))

def missing_values(data):
    
    print('Handling Missing Data')
    try:
        data['location'].fillna('no info', inplace = True)
        withoutcomma = data[~data['location'].str.contains(",")].index
        withcomma = data[data['location'].str.contains(",")].index

        for i in withcomma:
            data.loc[i, 'country'] = data.loc[i,
                                              'location'].split(',')[0].strip()

        for i in withoutcomma:
            data.loc[i, 'country'] = data.loc[i, 'location'].strip()

        data['salary_range'].fillna('0-0', inplace = True)

        for i in range(0, data.shape[0]):
            str = data.loc[i, 'salary_range']
            if re.search(r'[a-z,A-Z]',str):
                data.loc[i, 'salary_range']='0-0'

            if(data.loc[i, 'salary_range'].find("-") != -1):
                data.loc[i, 'minimum_salary'] = data.loc[i,
                                                'salary_range'].split('-')[0]
                data.loc[i,'maximum_salary'] = data.loc[i,
                                                'salary_range'].split('-')[1]
            else:
                data.loc[i, 'minimum_salary'] = data.loc[i, 'salary_range']
                data.loc[i, 'maximum_salary'] = data.loc[i, 'salary_range']

        columns = data.columns
        for i in columns:
            if(data[i].isna().any()):
                if(data[i].dtypes == 'object'):
                    data[i].fillna('no info', inplace = True)
                    data[i] = data[i].str.lower()

                else:
                    data[i].fillna(0, inplace = True)

        data.drop(['salary_range', 'location'], axis = 1, inplace = True)
        return data
    except Exception as e:
        handle('missing data handling process')


