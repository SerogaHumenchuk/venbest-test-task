import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const UserItem = ({ name, lastname, age, sex, classes }) => (
  <ListItem className={classes.item}>
    <Card className={classes.card}>
      <Typography>
        <Typography variant="h6">{`${name} ${lastname}`}</Typography>
      </Typography>
      <Typography>Возраст: {age}</Typography>
      <Typography>Пол: {sex === 'm' ? 'М' : 'Ж'}</Typography>
    </Card>
  </ListItem>
);

UserItem.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  sex: PropTypes.string.isRequired,
};

const styles = () => ({
  item: {
    width: 370,
  },
  card: {
    width: '100%',
    padding: 10,
    boxShadow: ' 1px 1px 10px blue',
  },
});

export default withStyles(styles)(UserItem);
