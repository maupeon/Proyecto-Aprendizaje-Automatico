import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios';

function FormAndroid (props){
    const [category, setCategory] = React.useState('');
    const [android, setAndroid] = React.useState('');
    const [name, setName] = React.useState('');
    const [genre, setGenre] = React.useState('');
    const [size, setSize] = React.useState('');
    //free paid
    const [error, setError] = React.useState(false);
    const [price, setPrice] = React.useState("");
    
    const handleClick = (event) => {
        console.log("ME CLICKEO")
        if(category != "" && android != "" && name != "" && genre != "" && size != "" ){
            console.log("All right!!!!!")
            setError(false)
            const PARAMS = {
                "Category":category,
                "AndroidVer":android,
                "App":name,
                "Genres":genre,
                "Size":size,
                "Type":"Paid"
            };
            const URLREQUEST = "http://localhost:5000/android-predict/";
            axios.post(URLREQUEST, PARAMS)
            .then(res => {
                console.log("RESPONSE:",res.data)
                setPrice(res.data)
            })
            .catch(error => {
                console.log("ERROR:",error)
                setPrice(error)
            })
        }
        else{
            console.log("Error")
            setError(true)
        }
    };

    return (
      <>
        <Grid container justify="center" alignItems="center">
            {error?
            <Grid item xs={12}>
                <h4 style={{color:"red"}}>Porfavor ingrese todos los datos</h4>
            </Grid>
            :<></>}
            {price?
            <Grid item xs={12}>
                <h4>De acuerdo a nuestro modelo de predicci&oacute;n y las caracteristicas de la app, debe de tener un precio de: USD{price}</h4>
            </Grid>
            :<></>}
            <Grid item xs={12}>
                <FormControl style={{width:"100%"}}>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    onChange={(event)=>{setCategory(event.target.value)}}
                    >
                    <MenuItem value={"GAME"}>GAME</MenuItem>
                    <MenuItem value={"FAMILY"}>FAMILY</MenuItem>
                    <MenuItem value={"TOOLS"}>TOOLS</MenuItem>
                    <MenuItem value={"ART_AND_DESIGN"}>ART_AND_DESIGN</MenuItem>
                    <MenuItem value={"AUTO_AND_VEHICLES"}>AUTO_AND_VEHICLES</MenuItem>
                    <MenuItem value={"BEAUTY"}>BEAUTY</MenuItem>
                    <MenuItem value={"BUSINESS"}>BUSINESS</MenuItem>
                    <MenuItem value={"BOOKS_AND_REFERENCE"}>BOOKS_AND_REFERENCE</MenuItem>
                    <MenuItem value={"COMICS"}>COMICS</MenuItem>
                    <MenuItem value={"COMMUNICATION"}>COMMUNICATION</MenuItem>
                    <MenuItem value={"DATING"}>DATING</MenuItem>
                    <MenuItem value={"EDUCATION"}>EDUCATION</MenuItem>
                    <MenuItem value={"ENTERTAINMENT"}>ENTERTAINMENT</MenuItem>
                    <MenuItem value={"EVENTS"}>EVENTS</MenuItem>
                    <MenuItem value={"FAMILY"}>FAMILY</MenuItem>
                    <MenuItem value={"FINANCE"}>FINANCE</MenuItem>
                    <MenuItem value={"FOOD_AND_DRINK"}>FOOD_AND_DRINK</MenuItem>
                    <MenuItem value={"MEDICAL"}>MEDICAL</MenuItem>
                    <MenuItem value={"PRODUCTION"}>PRODUCTION</MenuItem>
                    <MenuItem value={"PERSON"}>PERSON</MenuItem>
                    <MenuItem value={"SPORTS"}>SPORTS</MenuItem>
                    <MenuItem value={"LIFESTYLE"}>LIFESTYLE</MenuItem>
                    <MenuItem value={"HEALTH"}>HEALTH</MenuItem>
                    <MenuItem value={"PHOTOGRAPHY"}>PHOTOGRAPHY</MenuItem>
                    <MenuItem value={"SOCIAL"}>SOCIAL</MenuItem>
                    <MenuItem value={"NEWS_AND_MAGAZINES"}>NEWS_AND_MAGAZINES</MenuItem>
                    <MenuItem value={"SHOPPING"}>SHOPPING</MenuItem>
                    <MenuItem value={"TRAVEL_AND_LOCAL"}>TRAVEL_AND_LOCAL</MenuItem>
                    <MenuItem value={"VIDEO_PLAYERS"}>VIDEO_PLAYER</MenuItem>
                    <MenuItem value={"MAPS_AND_NAVIGATION"}>MAPS_AND_NAVIGATION</MenuItem>
                    <MenuItem value={"HOUSE_AND_HOME"}>HOUSE_AND_HOME</MenuItem>
                    <MenuItem value={"LIBARIES_AND_DEMO"}>LIBRARIES_AND_DEMO</MenuItem>
                    <MenuItem value={"PRODUCTIVITY"}>PRODUCTIVITY</MenuItem>
                    <MenuItem value={"EVENTS"}>EVENTS</MenuItem>
                    <MenuItem value={"PARENTING"}>PARENTING</MenuItem>                   
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl style={{width:"100%"}}>
                    <InputLabel id="demo-simple-select-label">Android Version</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={android}
                    onChange={(event)=>{setAndroid(event.target.value)}}
                    >
                    <MenuItem value={"4.1 and up"}>4.1 and up</MenuItem>
                    <MenuItem value={"4.0.3 and up"}>4.0.3 and up</MenuItem>
                    <MenuItem value={"4.0 and up"}>4.0 and up</MenuItem>
                    <MenuItem value={"Varies with device"}>Varies with device</MenuItem>
                    <MenuItem value={"4.4 and up"}>4.4 and up</MenuItem>
                    <MenuItem value={"2.3 and up"}>2.3 and up</MenuItem>
                    <MenuItem value={"5.0 and up"}>4.2 and up</MenuItem>
                    <MenuItem value={"2.3.3 and up"}>2.3.3 and up</MenuItem>
                    <MenuItem value={"2.2 and up"}>2.2 and up</MenuItem>
                    <MenuItem value={"4.3 and up"}>4.3 and up</MenuItem>
                    <MenuItem value={"3.0 and up"}>3.0 and up</MenuItem>
                    <MenuItem value={"2.1 and up"}>2.1 and up</MenuItem>
                    <MenuItem value={"1.6 and up"}>1.6 and up</MenuItem>
                    <MenuItem value={"6.0 and up"}>6.0 and up</MenuItem>
                    <MenuItem value={"7.0 and up"}>7.0 and up</MenuItem>
                    <MenuItem value={"3.2 and up"}>3.2 and up</MenuItem>
                    <MenuItem value={"2.0 and up"}>2.0 and up</MenuItem>
                    <MenuItem value={"5.1 and up"}>5.1 and up</MenuItem>
                    <MenuItem value={"1.5 and up"}>1.5 and up</MenuItem>
                    <MenuItem value={"4.4W and up"}>4.4W and up</MenuItem>
                    <MenuItem value={"3.1 and up"}>3.1 and up</MenuItem>
                    <MenuItem value={"2.0.1 and up"}>2.0.1 and up</MenuItem>
                    <MenuItem value={"8.0 and up"}>8.0 and up</MenuItem>
                    <MenuItem value={"7.1 and up"}>7.1 and up</MenuItem>
                    <MenuItem value={"1.0 and up"}>1.0 and up</MenuItem>
                    <MenuItem value={"4.0.3 - 7.1.1"}>4.0.3 - 7.1.1</MenuItem>
                    <MenuItem value={"5.0 - 8.0"}>5.0 - 8.0</MenuItem>
                    <MenuItem value={"2.2 - 7.1.1"}>2.2 - 7.1.1</MenuItem>
                    <MenuItem value={"4.1 - 7.1.1"}>4.1 - 7.1.1</MenuItem>
                    <MenuItem value={"5.0 - 7.1.1"}>5.0 - 7.1.1</MenuItem>
                    <MenuItem value={"5.0 - 6.0"}>5.0 - 6.0</MenuItem>
                    <MenuItem value={"7.0 - 7.1.1"}>7.0 - 7.1.1</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl style={{width:"100%"}}>
                    
                    <TextField required id="standard-required" label="Nombre de la app" onChange={e => {e.persist();setName(e.target.value);}}/>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl style={{width:"100%"}}>
                    <InputLabel id="demo-simple-select-label">G&eacute;nero de la aplicaci&oacute;n</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={genre}
                    onChange={(event)=>{setGenre(event.target.value)}}
                    >
                    <MenuItem value={"Tools"}>Tools</MenuItem>
                    <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
                    <MenuItem value={"Education"}>Education</MenuItem>
                    <MenuItem value={"Medical"}>Medical</MenuItem>
                    <MenuItem value={"Business"}>Business</MenuItem>
                    <MenuItem value={"Productivity"}>Productivity</MenuItem>
                    <MenuItem value={"Sports"}>Sports</MenuItem>
                    <MenuItem value={"Personalization"}>Personalization</MenuItem>
                    <MenuItem value={"Communication"}>Communication</MenuItem>
                    <MenuItem value={"Lifestyle"}>Lifestyle</MenuItem>
                    <MenuItem value={"Finance"}>Finance</MenuItem>
                    <MenuItem value={"Actions"}>Actions</MenuItem>
                    <MenuItem value={"Health & Fitness"}>Health and Fitness</MenuItem>
                    <MenuItem value={"Photography"}>Photography</MenuItem>
                    <MenuItem value={"Social"}>Social</MenuItem>
                    <MenuItem value={"News & Magazines"}>News and Magazines</MenuItem>
                    <MenuItem value={"Shopping"}>Shopping</MenuItem>
                    <MenuItem value={"Travel & Local"}>Travel and Local</MenuItem>
                    <MenuItem value={"Dating"}>Dating</MenuItem>
                    <MenuItem value={"Books & Reference"}>Books and Reference</MenuItem>
                    <MenuItem value={"Arcade"}>Arcade</MenuItem>
                    <MenuItem value={"Simulation"}>Simulation</MenuItem>
                    <MenuItem value={"Casual"}>Casual</MenuItem>
                    <MenuItem value={"Video Players & Editors"}>Video Players and Editors</MenuItem>
                    <MenuItem value={"Puzzle"}>Puzzle</MenuItem>
                    <MenuItem value={"Maps & Navigation"}>Maps and Navigation</MenuItem>
                    <MenuItem value={"Food & Drink"}>Food and Drink</MenuItem>
                    <MenuItem value={"Role Playing"}>Role Playing</MenuItem>
                    <MenuItem value={"Strategy"}>Strategy</MenuItem>
                    <MenuItem value={"Racing"}>Racing</MenuItem>
                    <MenuItem value={"Casual"}>Casual</MenuItem>
                    <MenuItem value={"Casual"}>Casual</MenuItem>
                    <MenuItem value={"Casual"}>Casual</MenuItem>
                    <MenuItem value={"Casual"}>Casual</MenuItem>
                    <MenuItem value={"Casual"}>Casual</MenuItem>
                    <MenuItem value={"Casual"}>Casual</MenuItem>
                    <MenuItem value={"Casual"}>Casual</MenuItem>
                    <MenuItem value={"Casual"}>Casual</MenuItem>
                    <MenuItem value={"Casual"}>Casual</MenuItem>

                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl style={{width:"100%"}}>
                    <InputLabel id="demo-simple-select-label">Peso de la aplicaci&oacute;n</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    onChange={(event)=>{setSize(event.target.value)}}
                    >
                    <MenuItem value={"50M"}>menos de 100MB</MenuItem>
                    <MenuItem value={"200M"}>100MB - 399MB</MenuItem>
                    <MenuItem value={"500M"}>400MB - 699MB</MenuItem>
                    <MenuItem value={"700M"}>700MB - 999MB</MenuItem>
                    <MenuItem value={"1100M"}>1000MB - 1299MB</MenuItem>
                    <MenuItem value={"14000M"}>1300MB - 1599MB</MenuItem>
                    <MenuItem value={"1700M"}>1600MB - 1899MB</MenuItem>
                    <MenuItem value={"2000M"}>m&aacute;s de 1900MB</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            
            <Grid item xs={12}>
                <div style={{textAlign:"center", alignItems:"center", padding:"10px auto"}}>
                    <Button variant="contained" color="primary" onClick={handleClick} style={{margin:"5px 0"}}>
                        Predecir precio
                    </Button>
                </div>
            </Grid>
        </Grid>
      </>
    );
  
}
export default FormAndroid;