import { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'; 
import Header from '../../components/Header';
import Budget from '../Budget';
import Income from '../Income';
import Expense from '../Expense';

import '../../style/style.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <Route path="/budget" component={Budget} />
          <Route path="/income" component={Income} />
          <Route path="/expense" component={Expense} />
          <Redirect to="/budget" />
        </div>
      </BrowserRouter>  
    )
  };
};

export default App;