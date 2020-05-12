import React  from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const DescriptionCard = (props) =>{
    return(
        <div style={{textAlign:"center", position: 'relative'}}>
            <Link to="/" style={{textDecoration:'none'}}>
            <Button size="large" color="primary" style={{width:"30%"}}>
                <h2>
                    INICIO
                </h2>
            </Button>
            </Link>
        </div>
    );
}

export default DescriptionCard;