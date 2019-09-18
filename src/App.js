import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import JobListing from './components/JobListing';
import AddJobModal from './components/AddJobModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <AppNavbar />
          <Container>
            <AddJobModal />
            <JobListing />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
