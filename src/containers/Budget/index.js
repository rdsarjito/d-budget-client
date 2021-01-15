import { Component } from 'react';

import Balance from '../Balance';
import Menu from '../Menu';

import './style.css'

class BudgetContainer extends Component {
  render() {
    return (
      <div>
        <Balance />
        <Menu />
      </div>
    )
  }
}

export default BudgetContainer;