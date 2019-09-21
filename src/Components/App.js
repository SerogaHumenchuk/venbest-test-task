import React, { Component } from 'react';
import UserList from './UserList';
import Loader from './Loader';
import ErrorNotification from './ErrorNotification';
import SearchBar from './SearchBar';
import * as usersAPI from '../services/users-api';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  state = {
    users: {
      list: [],
      name: '',
      lastname: '',
      age: '',
      sex: '',
    },
    error: null,
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    usersAPI
      .fetchUsers()
      .then(users => this.setState({ users: { list: users.data } }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(prevState => ({ users: { ...prevState.users, [name]: value } }));
  };

  getFilteredUsers = (list, name, lastname, age, sex) => {
    return list
      .filter(user => (name ? user.name.toLowerCase().includes(name.toLowerCase()) : user))
      .filter(user => (lastname ? user.lastname.toLowerCase().includes(lastname.toLowerCase()) : user))
      .filter(user => (age ? user.age === Number(age) : user))
      .filter(user => (sex ? user.sex === sex : user));
  };

  render() {
    const { users, isLoading, error } = this.state;
    const { list, name, lastname, age, sex } = users;

    return (
      <div>
        <Header />
        <Grid container direction="column" justify="space-between">
          <SearchBar onChange={this.handleChange} name={name} lastname={lastname} age={age} sex={sex} />
          {list.length > 0 && (
            <UserList
              list={list}
              name={name}
              lastname={lastname}
              age={age}
              sex={sex}
              getFilteredUsers={this.getFilteredUsers}
            />
          )}
        </Grid>
        {isLoading && <Loader />}
        {error && <ErrorNotification error={error.message} />}
        <Footer />
      </div>
    );
  }
}

export default App;
