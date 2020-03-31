"""
Alexandro Francisco Marcelo 	A01021383
Luis Fernando Carrasco 		    A01021172
Daniel Pelagio Vazquez 		    A01227873
Romeo Varela Nagore 		    A01020736
Mauricio Peón García		    A01024162
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

data_app_store = None
data_google_store = None

@app.route('/read')
def read():
    global data_app_store
    data_app_store = pd.read_csv("../dataset_appstore/AppleStore.csv")
    global data_google_store
    data_google_store = pd.read_csv("../dataset_googlestore/googleplaystore.csv")
    dfa_appstore = pd.DataFrame({
        0 : data_google_store['Rating'],
        1 : data_google_store['Category']
    })

    return "Read sucessfull"

@app.route('/')
def index():
    avg_genres = {}
    print( sorted(set(data_google_store['Category'])))
    for genre in sorted(set(data_google_store['Category'])):
        avg_genres[genre] = list(data_google_store['Category']).count(str(genre)) / len(data_google_store['Category']) *100
    #print(avg_genres)
    #print(data_google_store)
    return json.dumps(avg_genres)

@app.route('/top-by-user-rating')
def group_by_rating():
    json_file = {}
    sorted_json = {}

    #json_file = dict(data_google_store)
    test = data_google_store.sort_values(['Rating'])
    
    print("RADAMES= ",test['App'][0])
    #graph.setdefault(row["Parent"], []).append(row["Son"]) 
    
    return '0'

@app.route('/best-price-by-gender')
def best_price_by_gender():
    json_file = {}
    #global data_google_store
    # data_google_store = pd.read_csv("../dataset_googlestore/googleplaystore.csv")
    data_google_store = pd.read_csv("../dataset_googlestore/googleplaystore.csv")
    
    
    #in_order = dfa_playstore.groupby('Genres')
    #$3.99}

    dfa_ps = pd.DataFrame({
        "Gender" : data_google_store["Genres"],
        "Price" : data_google_store["Price"]
    })

    print(data_google_store)
    price = []
    gender = []
    print("CULO",dfa_ps['Price'][480],"CUPALA")

    for app in dfa_ps["Price"].values:
        print('app is', app)
        if app == '0' or app == "Everyone":
            price.append(0)
        else:
            p = app
            p_list = p.split('$')
            print('list is', p_list)
            p = float(p_list[1])
            price.append(p)

        gender.append(app)

    dfa_playstore = pd.DataFrame({
        "Gender" : gender,
        "Price" : price
    })
    
    print(dfa_playstore)
    meanPrice = dfa_playstore("Gender")["Price"].mean()
    print(meanPrice)

    return json.dumps(str(json_file)) 


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

'''
if __name__ == '__main__':
    app.run(host='localhost', debug=True, port=5000)
'''