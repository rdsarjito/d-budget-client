import { Component } from 'react';

import Balance from '../Balance';
import Menu from '../Menu';

import '../../style/style.css';

class BudgetContainer extends Component {
  render() {
    return (
      <main>
        <Balance />
        <Menu />
      </main>
    )
  }
}

export default BudgetContainer;