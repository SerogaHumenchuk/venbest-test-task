import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import UserItem from '../UserItem';
import List from '@material-ui/core/List';

const UserList = ({ list, name, lastname, age, sex, getFilteredUsers, classes }) => {
  const filteredUsers = getFilteredUsers(list, name, lastname, age, sex);

  return (
    <List className={classes.list}>
      {filteredUsers.map(user => (
        <UserItem {...user} />
      ))}
    </List>
  );
};

UserList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      sex: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

const styles = () => ({
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: '0 auto',
    width: 800,
  },
});

export default withStyles(styles)(UserList);
