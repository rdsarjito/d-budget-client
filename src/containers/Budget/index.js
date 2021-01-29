import { Component } from 'react';

import Balance from '../Balance';
import Menu from '../Menu';
import Doughnut from '../../components/Doughnut/index';

import '../../style/style.css';
class BudgetContainer extends Component {
  render() {
    return (
      <main>
        <Balance />
        <Menu />
        <Doughnut />
      </main>
    )
  }
}

export default BudgetContainer;