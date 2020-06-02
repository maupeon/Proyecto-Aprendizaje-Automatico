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

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function AppleStoreForm(props){

    const [name, setName] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [size, setSize] = React.useState('');
    const [supportingDevices, setSupportingDevices] = React.useState('');
    const [supportedLanguages, setSupportedLanguages] = React.useState('');
    const [contentRating, setContentRating] = React.useState('');

    const [error, setError] = React.useState(false);


    return (
        <>
        <Grid container justify="center" alignItems="center">
            <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
      </>
    );
  
}
export default AppleStoreForm;