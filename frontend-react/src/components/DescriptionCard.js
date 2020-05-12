import React  from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const DescriptionCard = (props) =>{
    return(
        <Card style={{display: 'flex'}}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Acción
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Esta app/genero tiene el mayor puntaje
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default DescriptionCard;