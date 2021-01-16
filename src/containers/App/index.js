import { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'; 
import Header from '../../components/Header';
import Income from '../Income';
import Budget from '../Budget';

import '../../style/style.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <Route path="/budget" component={Budget} />
          <Route path="/income" component={Income} />
          {/* <Redirect to="/budget" /> */}
        </div>
      </BrowserRouter>  
    )
  };
};

export default App;