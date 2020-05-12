import React  from 'react';
import Button from '@material-ui/core/Button';

const DescriptionCard = (props) =>{
    return(
        <div style={{textAlign:"center", position: 'relative'}}>
            <Button size="large" color="primary" style={{width:"30%"}}>
                <h2>
                    INICIO
                </h2>
            </Button>
        </div>
    );
}

export default DescriptionCard;