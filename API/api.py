"""
Alexandro Francisco Marcelo 	A01021383
Luis Fernando Carrasco 		  A01021172
Daniel Pelagio Vazquez 		A01227873
Romeo Varela Nagore 		A01020736
Mauricio Peón García		 A01024162
"""

from flask import Flask
from flask import request
import json
import pandas as pd
#import matplotlib.pyplot as plt
import numpy as np
#from sklearn  import preprocessing
#from sklearn.model_selection import cross_val_score
#from sklearn.naive_bayes import GaussianNB
app = Flask(__name__)

@app.route('/')
def index():
    data_app_store = pd.read_csv("../dataset_appstore/AppleStore.csv")
    data_google_store = pd.read_csv("../dataset_googlestore/googleplaystore.csv")
    dfa_appstore = pd.DataFrame({
        0 : data_app_store['user_rating'],
        1 : data_app_store['prime_genre']
    })

    
    return json.dumps(list(dfa_appstore[1]))



@app.route("/json/", methods=['GET','POST'])
def gettingJson():
    if request.method == 'POST':
        if request.is_json == False:
            return "Bad request"
        else: 
            content = request.get_json()
        return json.dumps(content)
    else:
        return json.dumps({'string': 'String','int':1,"list Strings":['List','String'],'list int':[1,2]})
