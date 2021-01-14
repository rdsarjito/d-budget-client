import { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'; 
import Budget from '../Budget';

import './style.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/budget" component={Budget} />
        <Redirect to="/budget" />
      </BrowserRouter>
    )
  };
};

export default App;