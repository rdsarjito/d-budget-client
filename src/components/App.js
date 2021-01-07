import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import Header from './Header/';
import Budget from './Budget/';
import Reports from './Reports/'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
          <Header />
          <Route path="/budget" component={Budget} />
          <Route path="/reports" component={Reports} />
       </BrowserRouter>
    )
  };
};

export default App;