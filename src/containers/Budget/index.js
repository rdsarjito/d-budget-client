import { Component } from 'react';

import Header from '../../components/Header';
import './style.css'

class BudgetContainer extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
      </div>
    )
  }
}

export default BudgetContainer;