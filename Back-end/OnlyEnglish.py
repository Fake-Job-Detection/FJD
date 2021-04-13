from textblob import TextBlob

# Detecting the language type using textBlob
# Identifying and returning the language type of the sentence
def detect_english_sentence(sentence):
    sentence = TextBlob(sentence)
    return sentence.detect_language()


# Returning whether its a english sentence or not
def is_English(sentence):
    if "en".__eq__(detect_english_sentence(sentence)):
        print("This is a English sentence")
        return True
    else:
        print("This is not a English sentence")
        return False


# Testings
is_English("Hello this is in English")
is_English("это компьютерный портал для гиков")
is_English("Hello I'm broken")


