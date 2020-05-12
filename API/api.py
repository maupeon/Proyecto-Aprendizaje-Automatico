"""
Alexandro Francisco Marcelo 	A01021383
Luis Fernando Carrasco 		    A01021172
Daniel Pelagio Vazquez 		    A01227873
Romeo Varela Nagore 		    A01020736
Mauricio Peón García		    A01024162
"""

from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
import json
import pandas as pd
#import matplotlib.pyplot as plt
import numpy as np
#from sklearn  import preprocessing
#from sklearn.model_selection import cross_val_score
#from sklearn.naive_bayes import GaussianNB
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

data_app_store = None
data_google_store = None

@app.route('/')
@cross_origin()
def index():
    avg_genres = {}
    #print( sorted(set(data_google_store['Category'])))
    for genre in sorted(set(data_google_store['Category'])):
        avg_genres[genre] = list(data_google_store['Category']).count(str(genre)) / len(data_google_store['Category']) *100
    #print(avg_genres)
    #print(data_google_store)
    return json.dumps(avg_genres)

# Method that sorts the apps by their rating
@app.route('/top-by-user-rating')
@cross_origin()
def group_by_rating():
    json_file = {}
    sorted_json = {}
    array_ = []

    #json_file = dict(data_google_store)
    
    # Sorting the data by Rating and saving it in a DF called test
    test = data_google_store.sort_values(['Rating'], ascending = False)

    new_data = pd.DataFrame({
        'Rating':test['Rating'],
        'App':test['App']
    })

    # We make a dictionary where each key is a number from 0 to the number of Apps, and the value is another dict with the name of the App and its rating
    for i in range (len(new_data)):
        array_.append({'name' : new_data['App'].iloc[i], 'value' : str(new_data['Rating'].iloc[i])})

    json_file['0'] = array_

    print(array_)
        
    json_ = json.dumps(json_file)
        
    # print(result)
    return json_

# Method that will make a linear regression with the prices per category, to know how you should price your app
@app.route('/best-price-by-gender')
@cross_origin()
def best_price_by_gender():
    json_file = {}
    array_2 = []
    #global data_google_store
    #data_google_store = pd.read_csv("../dataset_googlestore/googleplaystore.csv")
    data_google_store = pd.read_csv("./googleplaystore.csv")

    dfa_ps = pd.DataFrame({
        "Category" : data_google_store["Category"],
        "Price" : data_google_store["Price"]
    })

    # Arays to store the values for price and for the categories (as numbers to make the linear regression)
    price = []
    gender = []

    # For to go through the price values and remove the $ symbol, and also make it a float number 
    for app in dfa_ps["Price"].values:
        #print('app is', app)
        if app == '0' or app == "Everyone":
            price.append(0)
        else:
            p = app
            p_list = p.split('$')
            #print('list is', p_list)
            p = float(p_list[1])
            price.append(p)

    for gen in dfa_ps["Category"].values:
        gender.append(gen)

    dfa_playstore = pd.DataFrame({
        "Category" : gender,
        "Price" : price
    })

    print(dfa_playstore)
    meanPrice = dfa_playstore.groupby("Category")["Price"].mean()
    print(meanPrice)

    x = []  ###
    y = []  ###

    sumCat = 0    
    ###
    meanCat = sumCat/len(dfa_playstore.groupby("Category")["Price"].mean())

    meanPri = 0

    for cont,i in enumerate(dfa_playstore.groupby("Category")["Price"].mean()):
        sumCat += (cont+1)
        x.append(cont+1)
        meanPri += float(i)
        y.append(float(i))

       
    ###
    meanPri = meanPri/len(dfa_playstore.groupby("Category")["Price"].mean())

    numerator = 0
    denominator = 0
    for i in range (len(dfa_playstore.groupby("Category")["Price"].mean())):
        numerator += ((i+1) - (meanCat)) * (dfa_playstore.groupby("Category")["Price"].mean().iloc[i] - meanPri)
        denominator += ((i+1) - (meanCat))**2

        
    b1 = numerator / denominator   ###
    b0 = meanPri - (b1 * meanCat)   ###

    print('Pendiente: ', b0)

    maxX = len(dfa_playstore.groupby("Category")["Price"].mean())
    minX = 1

    X_ = np.linspace(minX, maxX, 1000)  ###
    Y_ = b0 + b1 * X_   ###

    cont = 0
    X_ = list(X_)
    Y_ = list(Y_)

    for value in X_:
        array_2.append({ 'x' : value, 'y' : Y_[cont]})
        cont+=1

    
    json_file['0'] = array_2
    print(json_file)

    return json.dumps(json_file)

# Endpoint to get the categories ranked by installs
@app.route('/top-category-by-installs')
@cross_origin()
def top_category_by_installs():
    json_file = {}

    data_google_store = pd.read_csv("./googleplaystore.csv")
    
    # Creating a dataframe to make it easy to read and analyze the information 
    dfa_ps = pd.DataFrame({
        "Category" : data_google_store["Category"],
        "Installs" : data_google_store["Installs"]
    })

    # Declaring variables to store the categories and the installs
    allCategories = set()
    installs = []
    category = []

    # Iterating through the rows to get the installs and clean them (because the format: 5,000+) 
    for install in dfa_ps["Installs"].values:
        if install != "Free":
            inst = install
            num = inst.replace('+','')
            numInstalls = int(num.replace(',', ''))
            installs.append(numInstalls)
        else:
            installs.append(0)

    # Storing the categories for the result
    for gen in dfa_ps["Category"].values:
        category.append(gen)
        allCategories.add(gen)

    # Creating a new dataframe to store the outputs obtained before
    dfa_playstore = pd.DataFrame({
        "Category" : category,
        "Installs" : installs
    })

    #print(dfa_playstore)
    # Getting the summation of the installs for each category
    categoriesInstalls = dfa_playstore.groupby("Category")["Installs"].sum()
    # Cleaning the categories, deleting a unexpected category
    numberInstallsCategory = categoriesInstalls.drop("1.9")
    # Sorting the ranked categories
    rankedInstalls = numberInstallsCategory.sort_values( ascending = False)

    arr_cat = list(rankedInstalls)
    arr_down =list(rankedInstalls.to_dict())
    arr_res = []
    for i,element in enumerate(arr_down):
        arr_res.append({"name":element,'value':arr_cat[i]})
    
    json_file['0'] = arr_res
    return json.dumps(json_file)

@app.route("/json/", methods=['GET','POST'])
@cross_origin()
def gettingJson():
    if request.method == 'POST':
        if request.is_json == False:
            return "Bad request"
        else: 
            content = request.get_json()
        return json.dumps(content)
    else:
        return json.dumps({'string': 'String','int':1,"list Strings":['List','String'],'list int':[1,2]})


if __name__ == '__main__':

    # Read a csv file as a pandas DataFrame. Saving it in a global variable for the others methods to use
    data_app_store = pd.read_csv("./AppleStore.csv")
    
    data_google_store = pd.read_csv("./googleplaystore.csv")
    dfa_appstore = pd.DataFrame({
        0 : data_google_store['Rating'],
        1 : data_google_store['Category']
    })

    print("Read sucessfull")

    app.run(host ='0.0.0.0', port = 5000, debug = True)
