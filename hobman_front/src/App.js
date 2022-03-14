import ResponsiveAppBar from './component/navigation';
import ButtonLink from './component/footer';
import Location from './component/form1';
import './App.css';
import {Grid} from '@material-ui/core';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <ResponsiveAppBar/>
        </Grid>
        <Grid item xs={2}>
          <Location/>
        </Grid>
        <Grid item xs={10}>
          <p>Less like a hotel more like a home</p>
        </Grid>
        <Grid item xs={12}>
          <hr></hr>
          <ButtonLink/>
        </Grid>
      </Grid>
      </div>
    );
}

export default App;
