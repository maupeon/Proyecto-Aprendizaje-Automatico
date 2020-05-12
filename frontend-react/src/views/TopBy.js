import React,{ useState, useEffect }  from 'react';
import Chart from '../components/chart-example';
import Grid from '@material-ui/core/Grid';
import Navbar from '../components/NavBar';

//CARD
import DescriptionCard from '../components/DescriptionCard';

import API from "../utils/API";
import LoadingScreen from './LoadingScreen';

function TopBy(props){

    const [datas, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        //console.log(props.match.params.type)
        
        API.get(props.match.params.type)
        .then((jsonres)=>{
          console.log(jsonres.data['0'])
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
                        <Grid container >
                            <Grid item xs={6} justify="center"  direction="row">
                                <Grid container spacing={1}>
                                    <Grid item xs={4}>
                                        <DescriptionCard/>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <DescriptionCard/>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <DescriptionCard/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} >
                                <Chart data={datas}/>
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