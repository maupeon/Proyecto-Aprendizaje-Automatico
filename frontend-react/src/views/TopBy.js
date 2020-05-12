import React,{ useState, useEffect }  from 'react';
import Chart from '../components/chart-example';
import Grid from '@material-ui/core/Grid';
import Navbar from '../components/NavBar';

//CARD
import DescriptionCard from '../components/DescriptionCard';

import API from "../utils/API";

function TopBy(){

    const [datas, setData] = useState({});

    useEffect(() => {

        API.get('/read')
        .then((jsonres)=>{
          console.log(jsonres)
        })
        .catch((error) => {
          console.log(error)
        })

        API.get('/top-by-user-rating')
        .then((jsonres)=>{
          console.log(jsonres)
          setData(jsonres);
        })
        .catch((error) => {
          console.log(error)
        })

        
    }, []);

    return(
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
                    <div style={{margin:'0 auto'}}> 
                    <Chart/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default TopBy;