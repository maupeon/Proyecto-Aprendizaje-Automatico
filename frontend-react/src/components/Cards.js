import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from './Card';

const Cards = (props) => {

    return(
        <div style={{textAlign:"center", position: 'relative'}}>
            <Grid container >
            {props.cards.map((card,index) =>{
                return(
                <Grid item xs={12} sm= {6} md={4} lg={3} className = 'Galery-Card' key= {index} >
                    <Card row = {card}/>
                </Grid>
                )
            })}
            </Grid>   
            {/*<div style={{position: 'absolute', bottom: 0, width: '100%', height: '50%', background: 'linear-gradient(to top, rgba(255,255,255, 1) 10%, rgba(255,255,255, 0) )' }}></div>*/}
        </div>
    );
} 
export default Cards;