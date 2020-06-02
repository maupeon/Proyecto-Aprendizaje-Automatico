import React,{ useState, useEffect }  from 'react';
import Chart from '../components/chart-example';
import Grid from '@material-ui/core/Grid';
import Navbar from '../components/NavBar';

//CARD
import DescriptionCard from '../components/DescriptionCard';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import API from "../utils/API";
import LoadingScreen from './LoadingScreen';
import data_info from '../api';

function TopBy(props){

    const [datas, setData] = useState({});
    const [cards_data, setCardsData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [info, setInfo]= useState({});

    useEffect(() => {
        //console.log(props.match.params.type)
        setInfo(data_info[props.match.params.type]);
        API.get(props.match.params.type)
        .then((jsonres)=>{
          console.log(jsonres.data['0'])
          setCardsData(jsonres.data['1'])
          setData(jsonres.data['0']);
          setLoading(false);
        })
        .catch((err) => {
            
          console.log("ERROR",err);
          setLoading(false);
          setError(true);
        })
        
        
    }, []);

    return(
        <div>
            {!loading?
                <div>
                    {!error?
                    <div>
                        <Navbar/>
                        <Grid container>
                            <Grid style={{padding: '0 2em'}} item xs={6}>
                                <Card style={{display: 'flex'}}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Chart data={datas}/>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                    :
                    <div>Hubo un error con la petici&oacute;n</div>}
                </div>
            :<LoadingScreen/>}
        </div>
    );
}

export default TopBy;