import React from 'react';
import Grid from '@material-ui/core/Grid';

const ErrorNotification = ({ error }) => (
  <Grid container justify="center">
    <h1>Whoops, something went wrong: {error}</h1>
  </Grid>
);

export default ErrorNotification;
