"""
Alexandro Francisco Marcelo 	A01021383
Luis Fernando Carrasco 		    A01021172
Daniel Pelagio Vazquez 		    A01227873
Romeo Varela Nagore 		    A01020736
Mauricio Peón García		    A01024162
"""


# Precio promedio, rating promedio, número de apps, número de categoría, tamaño promedio. 

from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
#from sklearn import preprocessing 
import json
import os
import pandas as pd
import math
#import matplotlib.pyplot as plt
import numpy as np
from google.cloud import automl_v1beta1 as automl
#from sklearn  import preprocessing
#from sklearn.model_selection import cross_val_score
#from sklearn.naive_bayes import GaussianNB
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

data_app_store = None
data_google_store = None

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'systems-279104-dd393074d7e1.json'
prediction_client = automl.PredictionServiceClient.from_service_account_json("systems-279104-dd393074d7e1.json")

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

@app.route('/overview')
@cross_origin()
def overview():
    json_file = {}
    
    categories = data_google_store.pivot_table(index=['Category'], aggfunc='size')

    # print(data_google_store["Size"].replace('M', '', regex=True))
    if 'Varies with device' not in data_google_store["Size"]:
        print(data_google_store["Size"])
    else:
        print('\n\nHola')
    
    
    number_of_apps = data_google_store['App'].count()
    mean_of_rating = data_google_store['Rating'].mean()
    mean_of_price = data_google_store["Price"].replace('[\$\,\.]', '', regex=True).astype(float).mean(axis = 0) /100

    categoriesInstalls = data_google_store.sort_values(["Reviews", "Rating"], ascending = [False, False])
    print("YEYE",categoriesInstalls.iloc[0].App)

    json_file['App'] = str(number_of_apps)
    json_file['Rating'] = str(mean_of_rating)
    json_file['Price'] = str(mean_of_price)
    json_file['BestApp'] = categoriesInstalls.iloc[0].App

    new_dataframe = pd.DataFrame({
        'App':data_google_store['App'].count(),
        'Rating':data_google_store['Rating'].mean(),
        "Category" : data_google_store["Category"],
        "Price" : data_google_store["Price"].replace('[\$\,\.]', '', regex=True).astype(float).mean()
    })

    print("HOLA",data_google_store["Price"].replace('[\$\,\.]', '', regex=True).astype(float).sort_values( ascending = False))
    #json_file['Category'] = pd.to_numeric(new_dataframe['Category'])
    
    
    return json.dumps(json_file)


@app.route('/categories')
@cross_origin()
def categories():
    avg_genres=[]
    json_file={}
    #print( sorted(set(data_google_store['Category'])))
    for genre in sorted(set(data_google_store['Category'])):
        if genre != "1.9":
            avg_genres.append({'name':genre, 'value':list(data_google_store['Category']).count(str(genre)) / len(data_google_store['Category']) *100})
    #print(avg_genres)
    #print(data_google_store)
    json_file['0']=avg_genres
    return json.dumps(json_file)


# Method that sorts the apps by their rating
@app.route('/top-by-user-rating')
@cross_origin()
def group_by_rating():
    json_file = {}
    sorted_json = {}
    array_ = []

    #json_file = dict(data_google_store)
    
    # Sorting the data by Rating and saving it in a DF called test
    # test = data_google_store.sort_values(['Rating'], ascending = False)
    test = data_google_store

    new_data = pd.DataFrame({
        'Rating':test['Rating'],
        'App':test['App'],
        'Installs':test['Installs']
    })
    print(len(test))
    # We make a dictionary where each key is a number from 0 to the number of Apps, and the value is another dict with the name of the App and its rating
    for i in range(1, 1000):
        if float(new_data['Installs'].iloc[i][0:-1].replace(",",""))/1000000 > 500:
            array_.append({'name' : new_data['App'].iloc[i], 'value' : str(new_data['Rating'].iloc[i]), 'Installs' : float(new_data['Installs'].iloc[i][0:-1].replace(",",""))/1000000, 'fill': 'rgba(0, 0, 255, 255)'})
        elif float(new_data['Installs'].iloc[i][0:-1].replace(",",""))/1000000 <= 500 and float(new_data['Installs'].iloc[i][0:-1].replace(",",""))/1000000 >= 1 :
            array_.append({'name' : new_data['App'].iloc[i], 'value' : str(new_data['Rating'].iloc[i]), 'Installs' : float(new_data['Installs'].iloc[i][0:-1].replace(",",""))/1000000, 'fill': '#3182FC'})
        elif float(new_data['Installs'].iloc[i][0:-1].replace(",",""))/1000000 < 1:
            array_.append({'name' : new_data['App'].iloc[i], 'value' : str(new_data['Rating'].iloc[i]), 'Installs' : float(new_data['Installs'].iloc[i][0:-1].replace(",",""))/1000000, 'fill': 'rgb(255, 0, 0)'})
        else:
            array_.append({'name' : new_data['App'].iloc[i], 'value' : str(new_data['Rating'].iloc[i]), 'Installs' : float(new_data['Installs'].iloc[i][0:-1].replace(",",""))/1000000, 'fill': 'rgb(0, 0, 255)'})

   
    json_file['0'] = array_
        
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
        array_2.append({ 'name' : Y_[cont], 'value' :value })
        cont+=1

    
    json_file['0'] = array_2
    print(json_file)

    return json.dumps(json_file)

# Endpoint to get the categories ranked by installs
@app.route('/top-category-by-installs')
@cross_origin()
def top_category_by_installs():
    json_file = {}
    
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
    categoriesInstalls = dfa_playstore.groupby("Category")["Installs"].sum().sort_values( ascending = False)
    categoriesInstallsCount = dfa_playstore.groupby("Category")["Installs"].count()

    dictTemp = {}
    listDict = categoriesInstalls.keys()
    for cat in listDict:
        dictTemp[str(cat)] = categoriesInstallsCount[cat]

    categoriesName = dfa_playstore.groupby("Category")
    
    # Sorting the ranked categories
    rankedInstalls = categoriesInstalls.sort_values( ascending = False)

    arr_cat = list(categoriesInstalls)
    arr_cat_count = list(categoriesInstallsCount)
    arr_down =list(categoriesInstalls.to_dict())
    arr_res = []

    for i, element in enumerate(listDict):
        arr_res.append({"name":element,'value': int(arr_cat[i]/10000000), 'count_apps' : str(dictTemp[element])})
        
    json_file['0'] = arr_res
    json_file['1'] = [[arr_down[0],arr_cat[0]],[arr_down[math.floor(len(arr_down)/2)],arr_cat[math.floor(len(arr_cat)/2)]],[arr_down[len(arr_down)-1],arr_cat[len(arr_cat)-1]]]
    return json.dumps(json_file)


# Endpoint to get the categories ranked by installs
@app.route('/android-versions')
@cross_origin()
def android_versions():
    json_file = {}

    data_google_store = pd.read_csv("./googleplaystore.csv")
    
    # Creating a dataframe to make it easy to read and analyze the information 
    dfa_ps = pd.DataFrame({
        "Version" : data_google_store["Android Ver"],
        "App" : data_google_store["App"]
    })

    # Declaring variables to store the categories and the installs
    allCategories = set()
    installs = []
    category = []

    # Iterating through the rows to get the installs and clean them (because the format: 5,000+) 
    versions = dfa_ps.groupby("Version")["Version"].count().sort_values( ascending = False)

    arr_cat = list(versions)
    arr_down =list(versions.to_dict())
    arr_res = []
    total=len(arr_down)
    for i,element in enumerate(arr_down):
        if i > 12:
            break
        if "-" in element:
            pass
        else:
            values = 255*((i+1)/total)-255
            value=int(abs(values))
            #rgba="rgba(0,255,0,"+value+")"
            rgba='#{:02x}{:02x}{:02x}{:02x}'.format( 150, value, 255, 255)
            '''
            '#{:02x}{:02x}{:02x}{:02x}'.format( 120, 0 , 255, 128 )
            '#7800ff80'
            '''
            arr_res.append({"name":element,'value':arr_cat[i], 'fill': rgba})
    arr_res = arr_res[::-1]
    json_file['0'] = arr_res
    
    return json.dumps(json_file)


@app.route("/appsbycategory", methods=['GET','POST'])
@cross_origin()
def appsByCategory():
   
    #rgba='#{:02x}{:02x}{:02x}{:02x}'.format( 150, value, 255, 255)
    json_file = {}
    count = data_google_store[['Category','Rating']].groupby('Category')['Rating'] \
                                                    .count() \
                                                    .reset_index(name='count') \
                                                    .sort_values(['count'], ascending=False)

    numberOfAppsByCategory = []

    size = count["Category"].size
    total = len(count)
    for i in range(1,size):
        values = 255*((i+1)/total)-255
        value=int(abs(values))
        #rgba="rgba(0,255,0,"+value+")"
        rgba='#{:02x}{:02x}{:02x}{:02x}'.format( 0, value, 0, 255)
        data = {"Category":str(count["Category"][i]),"value":int(count["count"][i]),'fill': rgba}
        numberOfAppsByCategory.append(data)

    json_file['0'] = numberOfAppsByCategory
    return json.dumps(json_file)


@app.route("/appsbycontentrating", methods=['GET','POST'])
@cross_origin()
def appsByContent():
    json_file = {}

    data_google_store = pd.read_csv("./googleplaystore.csv")
    
    # Creating a dataframe to make it easy to read and analyze the information 
    dfa_ps = pd.DataFrame({
        "Content Rating" : data_google_store["Content Rating"],
        "App" : data_google_store["App"]
    })

    # Declaring variables to store the categories and the installs
    allCategories = set()
    installs = []
    category = []

    # Iterating through the rows to get the installs and clean them (because the format: 5,000+) 
    versions = dfa_ps.groupby("Content Rating")["Content Rating"].count().sort_values( ascending = True)

    arr_cat = list(versions)
    arr_down =list(versions.to_dict())
    arr_res = []
    total=len(arr_down)
    for i,element in enumerate(arr_down):
        if "Unrated" in element or "Adults" in element:
            pass
        else:
            values = 255*((i+1)/total)-254
            value=int(abs(values))
            rgba='#{:02x}{:02x}{:02x}{:02x}'.format( 0, value, 255, 255)
            arr_res.append({"name":element,'value':arr_cat[i], 'fill': rgba})
    arr_res = arr_res[::-1]
    print("cacascsadadsaadsad", arr_res)
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

@app.route("/android-predict/", methods=['GET','POST'])
@cross_origin()
def android():
    if request.method == 'POST':
        if request.is_json == False:
            return "Bad request"
        else: 
            content = request.get_json()
            print(content)
            
            project_id = 'systems-279104'
            compute_region = 'us-central1'
            model_display_name = 'untitled_15910746_20200602124811'
            inputs = content
            feature_importance=True

            #client = automl.TablesClient(project=project_id, region=compute_region)
           
            result = predict(
                project_id, compute_region, model_display_name, content
            )


        return json.dumps(result)
    else:
        return json.dumps({'string': 'String','int':1,"list Strings":['List','String'],'list int':[1,2]})

def predict(
    project_id,
    compute_region,
    model_display_name,
    inputs,
    feature_importance=None,
):
    """Make a prediction."""
    # [START automl_tables_predict]
    # TODO(developer): Uncomment and set the following variables
    # project_id = 'PROJECT_ID_HERE'
    # compute_region = 'COMPUTE_REGION_HERE'
    # model_display_name = 'MODEL_DISPLAY_NAME_HERE'
    # inputs = {'value': 3, ...}

    from google.cloud import automl_v1beta1 as automl

    client = automl.TablesClient(project=project_id, region=compute_region)

    if feature_importance:
        response = client.predict(
            model_display_name=model_display_name,
            inputs=inputs,
            feature_importance=True,
        )
    else:
        response = client.predict(
            model_display_name=model_display_name, inputs=inputs
        )

    print("Prediction results:")
    for result in response.payload:
        #print(result)
        print(
            "Predicted class name: {}".format(result.tables.value.string_value)
        )
        print("Predicted class score: {}".format(result.tables.value))
        try:
            return str(result.tables.value).split()[1]
            
        except:
            return "2.34"
        if feature_importance:
            # get features of top importance
            feat_list = [
                (column.feature_importance, column.column_display_name)
                for column in result.tables.tables_model_column_info
            ]
            feat_list.sort(reverse=True)
            if len(feat_list) < 10:
                feat_to_show = len(feat_list)
            else:
                feat_to_show = 10

            print("Features of top importance:")
            for feat in feat_list[:feat_to_show]:
                print(feat)

    # [END automl_tables_predict]



if __name__ == '__main__':

    # Read a csv file as a pandas DataFrame. Saving it in a global variable for the others methods to use
    data_app_store = pd.read_csv("./AppleStore.csv")
    
    data_google_store = pd.read_csv("./googleplaystore.csv")
    data_google_store.drop_duplicates(subset ="App", keep = 'first', inplace = True)

    dfa_appstore = pd.DataFrame({
        0 : data_google_store['Rating'],
        1 : data_google_store['Category']
    })

    print("Read sucessfull")

    app.run(host ='0.0.0.0', port = 5000, debug = True)
