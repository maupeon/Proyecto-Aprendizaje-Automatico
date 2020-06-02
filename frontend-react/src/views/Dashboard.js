import React,{useState, useEffect} from 'react';
import Cards from '../components/Cards';
import LoadingScreen from './LoadingScreen';
import Grid from '@material-ui/core/Grid'
import TopByCategory from '../components/TopByCategory';
import TopByInstalls from '../components/TopByInstalls';
import AndroidVersions from '../components/AndroidVersions';
import AppsByCategory from '../components/AppsByCategory';
import FunnelChart from '../components/FunnelChart';
import TopByCategoryAndApps from '../components/TopByCategoryAndApps';

//List
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';


//Form
//import AppleStoreForm from '../components/AppleStoreForm';
import FormAndroid from '../components/FormAndroid'





import API from "../utils/API";

//CARD
import DescriptionCard from '../components/DescriptionCard';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

function Dashboard() {
    const [overview, setOverview] = useState({});
    const [datas, setData] = useState({});
    const [datas2, setData2] = useState({});
    const [datas3, setData3] = useState({});
    const [appsByCategoryData, setappsByCategoryData] = useState({});
    const [appsByContentRating, setappsByContentRating] = useState({});
    const [loading1, setLoading1] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [loading3, setLoading3] = useState(true);
    const [loading4, setLoading4] = useState(true);
    const [loading5, setLoading5] = useState(true);
    const [loadingO, setLoadingO] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        //console.log(props.match.params.type)
        //setInfo(data_info[props.match.params.type]);
        API.get('/overview')
        .then((jsonres)=>{
          console.log("FGHFGHFGH", jsonres.data)
          setOverview(jsonres.data);
          setLoadingO(false);
        })
        .catch((err) => {
          console.log("ERROR",err);
          setLoading1(false);
          setError(true);
        })

        API.get('/top-by-user-rating')
        .then((jsonres)=>{
          console.log(jsonres.data['0'])
          setData(jsonres.data['0']);
          setLoading1(false);
        })
        .catch((err) => {
          console.log("ERROR",err);
          setLoading1(false);
          setError(true);
        })

        API.get('/top-category-by-installs')
        .then((jsonres)=>{
          console.log(jsonres.data['0'])
          setData2(jsonres.data['0']);
          setLoading2(false);
        })
        .catch((err) => {
            
          console.log("ERROR",err);
          setLoading2(false);
          setError(true);
        })

        API.get('/android-versions')
        .then((jsonres)=>{
          console.log(jsonres.data['0'])
          setData3(jsonres.data['0']);
          setLoading3(false);
        })
        .catch((err) => {
            
          console.log("ERROR",err);
          setLoading3(false);
          setError(true);
        })

        API.get('/appsbycategory')
        .then((jsonres)=>{
          console.log(jsonres.data['0'])
          setappsByCategoryData(jsonres.data['0']);
          setLoading4(false);
        })
        .catch((err) => {
            
          console.log("ERROR",err);
          setLoading4(false);
          setError(true);
        })
        API.get('/appsbycontentrating')
        .then((jsonres)=>{
          console.log(jsonres.data['0'])
          setappsByContentRating(jsonres.data['0']);
          setLoading5(false);
        })
        .catch((err) => {
            
          console.log("ERROR",err);
          setLoading5(false);
          setError(true);
        })
        
        
    }, []);
    const textCard={
        textAlign:"center", 
        padding: '0.5em 0',
        margin: 0
    }
    return (
        <div >
            {/*<Cards cards={cards} />*/}
            <div>
            {!loading1?
                <div>
                    {!error?
                    <div>
                        <Grid container >
                            <>
                            {!loading1?
                            <Grid style={{padding: '0 2em'}} item xs={12}>
                                <h2>An&aacute;lisis general Google PlayStore</h2>
                                <Grid container direction="row" alignItems="baseline" justify="center" spacing={3}>
                                    <Grid item xs={4} >
                                        <Card>
                                            <h4 style={textCard}>Apps totales</h4>
                                            <h2 style={textCard}>{overview.App}</h2>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Card style = {{}}>
                                            <h4 style={textCard}>Calificación promedio</h4>
                                            <h2 style={textCard}>{Number(overview.Rating).toFixed(2)} / 5</h2>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Card style = {{}}>
                                            <h4 style={textCard}>Precio promedio</h4>
                                            <h2 style={textCard}>$ {Number(overview.Price).toFixed(4)} USD</h2>
                                        </Card>
                                    </Grid>
                                </Grid>
                                <Card style={{display: 'flex', padding: '2em 0 0 0', margin: '0 0 3.5em 0'}}>
                                    <TopByInstalls data={datas}/>
                                </Card>
                            </Grid>
                            :<></>}
                            {!loading2?
                            <Grid style={{padding: '0 2em'}} item xs={12} sm={12} md={6}>
                                <h2>Categorías por millon de descargas</h2>
                                <Card style={{display: 'flex'}}>
                                    <TopByCategory data={datas2}/>                                
                                </Card>
                            </Grid>
                            :<></>}
                            
                            {!loading4?
                            <Grid style={{padding: '0 2em'}} item xs={12} sm={12} md={6}>
                                <h2>Categorías por número de aplicaciones</h2>
                                <Card style={{display: 'flex'}}>
                                    <AppsByCategory data={appsByCategoryData}/>
                                </Card>
                            </Grid>
                            :<></>}

                            {!loading2?
                            <Grid style={{padding: '2em 2em'}} item xs={12}>
                                <h2>Categorías por descargas y número de aplicaciones</h2>
                                <Card style={{display: 'flex'}}>
                                    <TopByCategoryAndApps data={datas2}/>
                                </Card>
                            </Grid>
                            :<></>}

                            {!loading3?
                            <Grid style={{padding: '0 2em'}} item xs={12} sm={12} md={6}>
                                <h2>Versiones de Android m&aacute;s utilizadas para programar </h2>
                                <Grid container direction="row" alignItems="baseline" justify="center" spacing={2}>
                                    <Grid item xs={4} >
                                        <Card style = {{backgroundColor: 'rgba(0, 0, 255, .6)'}}>
                                            <h4 style={textCard}>Versi&oacute;n de android más usada</h4>
                                            <h4 style={textCard}>{Object.values(datas3)[Object.keys(datas3).length-1].name}</h4>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Card style = {{backgroundColor: 'rgba(0, 0, 255, .4)'}}>
                                            <h4 style={textCard}>Versi&oacute;n de android intermedia</h4>
                                            <h4 style={textCard}>{Object.values(datas3)[(Object.keys(datas3).length-1)/2].name}</h4>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Card style = {{backgroundColor: 'rgba(0, 0, 255, .2)'}}>
                                            <h4 style={textCard}>Versi&oacute;n de android menos usada</h4>
                                            <h4 style={textCard}>{Object.values(datas3)[0].name}</h4>
                                        </Card>
                                    </Grid>
                                </Grid>
                                <Card style={{display: 'flex'}}>
                                    <AndroidVersions data={datas3}/>
                                </Card>
                            </Grid>
                            :<></>}
                            {!loading5?
                            <Grid style={{padding: '2em 2em'}} item xs={12} sm={12} md={6}>
                                <h2>Clasificaciones</h2>
                                <Card style={{display: 'flex'}}>
                                    <FunnelChart data={appsByContentRating}/>
                                </Card>
                            </Grid>
                            :<></>}
                            {!loading5?
                            <Grid style={{padding: '2em 2em'}} item xs={12} sm={12} md={6}>
                                <h2>Recomendaciones para tu app</h2>
                                <FormAndroid/>
                                
                            </Grid>
                            
                            :<></>}
                            </>
                        </Grid>
                    </div>
                    :
                    <div>Hubo un error con la petici&oacute;n</div>}
                </div>
            :<LoadingScreen/>}
        </div>
        </div>
    )
}


export default Dashboard;