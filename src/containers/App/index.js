import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'; 
import Header from '../../components/Header';
import SignUp from '../../components/Auth/SignUp';
import Dashboard from '../Dashboard';
import Income from '../Income/income';
import Expense from '../Expense';
import History from '../History';
import Category from '../Category';
import Login from '../Login';

import '../../style/style.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/income" component={Income} />
        <Route path="/expense" component={Expense} />
        <Route path="/history" component={History} />
        <Route path="/category" component={Category} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Redirect to="/dashboard" />
      </div>
    </BrowserRouter>
  )
}

export default App;