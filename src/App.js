import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import CustomersContainer from './containers/CustomersContainer';
import HomeContainer from './containers/HomeContainer';
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';

class App extends Component {

  renderHome = () => <HomeContainer />;

  renderCustomerContainer = () => <CustomersContainer></CustomersContainer>;

  renderCustomerListContainer = () => <h1>Customers List Container</h1>;


  render() {

    return (
      <Router>
        <div>
          <Route exact path="/" component={this.renderHome} />
          <Route exact path="/customers" component={this.renderCustomerContainer} />
          
          <Switch>
            <Route path="/customers/new" component={NewCustomerContainer} />
            <Route path="/customers/:dni" render = {props => <CustomerContainer dni={props.match.params.dni}/> } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
