import { Component } from 'react';

import Balance from '../Balance';
import Menu from '../Menu';
import Report from '../Report';

import '../../style/style.css';

class BudgetContainer extends Component {
  render() {
    return (
      <main>
        <Balance />
        <Menu />
        <Report />
      </main>
    )
  }
}

export default BudgetContainer;