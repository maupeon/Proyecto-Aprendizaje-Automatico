import React,{useState, useEffect} from 'react';
import Cards from '../components/Cards';
import LoadingScreen from './LoadingScreen';


import TopByCategory from '../components/TopByCategory';
import TopByInstalls from '../components/TopByInstalls';
import AndroidVersions from '../components/AndroidVersions';
import AppsByCategory from '../components/AppsByCategory';
import FunnelChart from '../components/FunnelChart';




import Grid from '@material-ui/core/Grid';

import API from "../utils/API";

//CARD
import DescriptionCard from '../components/DescriptionCard';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const cards = [
    {
        image: 'https://s27389.pcdn.co/wp-content/uploads/2019/12/top-5-data-science-strategy-predictions-2020-1024x440.jpeg',
        name: 'Top apps',
        path: 'top-by-user-rating',
        type: 'app',
        y: 'reviews',
        desc: 'Aquí podrás observar el comportamiento de las apps en relación a las calificaciones que obtienen por los usuarios'
    },
    {
        image: 'https://picsum.photos/1000/600',
        name: 'Top categories',
        path: 'top-category-by-installs',
        type: 'category',
        y: 'downloads',
        desc: 'Aquí podrás observar el la relación entre la categoría de las apps con la cantidad de descargas obtenidas en la PlayStore'
    },
    {
        image: 'https://picsum.photos/1000/650',
        name: 'Hotel dentro de la vanena',
        path: 'best-price-by-gender',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/700',
        name: 'Percentage of categories',
        path: 'categories',
        type: 'categories',
        desc: 'La descripcion de categories'
    },
    {
        image: 'https://picsum.photos/1000/750',
        name: 'App',
        path: 'best-price-by-gender',
        type: 'gender',
        desc: 'La descripcion de que luis se la come'
    },
    {
        image: 'https://logolab.io/assets/img/cool-logo-ideas-2019/optimised/yuri-kartashev.jpeg',
        name: ' ',
        path: 'Logo',
        type: ' ',
        desc: ' '
    },
    {
        image: 'https://www.xda-developers.com/files/2019/05/play-store-1.jpg',
        name: ' ',
        path: 'Logo',
        type: ' ',
        desc: ' '
    },
    {
        image: 'https://picsum.photos/1000/900',
        name: 'Helipuerto sobre avenida',
        path: 'best-price-by-gender',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/950',
        name: 'Centro de carga tarango',
        path: 'best-price-by-gender',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/1000',
        name: 'Casa-departamentos en las Aguilas',
        path: 'best-price-by-gender',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/1010',
        name: 'Hotel dentro de la vanena',
        path: 'best-price-by-gender',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/1020',
        name: 'Helipuerto sobre avenida',
        path: 'best-price-by-gender',
        type: 'Oficinas administrativas',
        desc: 'La descripcion de la obra'
    },
]
function Dashboard() {
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
    const [error, setError] = useState(false);

    useEffect(() => {
        //console.log(props.match.params.type)
        //setInfo(data_info[props.match.params.type]);
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
        textAlign:"center"
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
                                <h2>Google App Store Analytics Overview</h2>
                                <Grid container direction="row" alignItems="baseline" justify="center" spacing={3}>
                                    <Grid item xs={4} >
                                        <Card>
                                            <h4 style={textCard}>App m&aacute;s descargada </h4>
                                            <h2 style={textCard}>{Object.values(datas)[0].name}</h2>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Card>
                                            <h4 style={textCard}>App menos famosa</h4>
                                            <h2 style={textCard}>{Object.values(datas)[Object.keys(datas).length-1].name}</h2>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Card>
                                            <h4 style={textCard}>App intermedia</h4>
                                            <h2 style={textCard}>{Object.values(datas)[(Object.keys(datas).length-1)/2].name}</h2>
                                        </Card>
                                    </Grid>
                                </Grid>
                                <Card style={{display: 'flex', padding: '2em 0 0 0', margin: '0 0 3.5em 0'}}>
                                    <TopByInstalls data={datas}/>
                                </Card>
                            </Grid>
                            :<></>}
                            {!loading2?
                            <Grid style={{padding: '0 2em'}} item xs={6}>
                                <h2>Categorías por millon de instalaciones</h2>
                                <Grid container direction="row" alignItems="baseline" justify="center">
                                    <Grid item xs={4} >
                                        <Card>
                                            <h4 style={textCard}>Categor&iacute;a m&aacute;s instalada: {Object.values(datas2)[0].name}</h4>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Card>
                                            <h4 style={textCard}>Categor&iacute;a menos instalada: {Object.values(datas2)[Object.keys(datas2).length-1].name}</h4>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Card>
                                            <h4 style={textCard}>Categor&iacute;a intermedia: {Object.values(datas2)[(Object.keys(datas2).length-1)/2].name}</h4>
                                        </Card>
                                    </Grid>
                                </Grid>
                                <Card style={{display: 'flex'}}>
                                    <TopByCategory data={datas2}/>                                
                                </Card>
                            </Grid>
                            :<></>}
                            {!loading3?
                            <Grid style={{padding: '0 2em'}} item xs={6}>
                                <h2>Versiones de Android m&aacute;s utilizadas para programar </h2>
                                <Grid container direction="row" alignItems="baseline" justify="center">
                                    <Grid item xs={4} >
                                        <Card>
                                            <h4 style={textCard}>Versi&oacute;n de android con m&aacute;s soporte: {Object.values(datas3)[Object.keys(datas3).length-1].name}</h4>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Card>
                                            <h4 style={textCard}>Versi&oacute;n de android con menos soporte: {Object.values(datas3)[0].name}</h4>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Card>
                                            <h4 style={textCard}>Versi&oacute;n de android intermedia: {Object.values(datas3)[(Object.keys(datas3).length-1)/2].name}</h4>
                                        </Card>
                                    </Grid>
                                </Grid>
                                <Card style={{display: 'flex'}}>
                                    <AndroidVersions data={datas3}/>
                                </Card>
                            </Grid>
                            :<></>}
                            {!loading4?
                            <Grid style={{padding: '2em 2em'}} item xs={6}>
                                <h2>Aplicaciones por Categoría</h2>
                                <Card style={{display: 'flex'}}>
                                    <AppsByCategory data={appsByCategoryData}/>
                                </Card>
                            </Grid>
                            :<></>}
                            {!loading5?
                            <Grid style={{padding: '2em 2em'}} item xs={6}>
                                <h2>Clasificaci&oacute;n m&aacute;s desarrollada</h2>
                                <Grid container direction="row" alignItems="baseline" justify="center">
                                    <Grid item xs={6} >
                                        <Card>
                                            <h4 style={textCard}>Clasificaci&oacute;n m&aacute;s desarrollada: {Object.values(appsByContentRating)[0].name}</h4>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Card>
                                            <h4 style={textCard}>Clasificaci&oacute;n menos desarrollada: {Object.values(appsByContentRating)[Object.keys(appsByContentRating).length-1].name}</h4>
                                        </Card>
                                    </Grid>
                                </Grid>
                                <Card style={{display: 'flex'}}>
                                    <FunnelChart data={appsByContentRating}/>
                                </Card>
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