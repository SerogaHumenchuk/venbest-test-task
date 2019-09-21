import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ThreeDots from 'react-loader-spinner';
import React from 'react';
import Grid from '@material-ui/core/Grid';

const Loader = () => (
  <Grid container justify="center">
    <ThreeDots type="ThreeDots" color="blue" height={100} width={100} />
  </Grid>
);

export default Loader;
