import { Component } from 'react';

import Balance from '../Balance';
import Menu from '../Menu';

import History from '../../components/History';
import '../../style/style.css';


class BudgetContainer extends Component {
  render() {
    return (
      <div>
        <Balance />
        <Menu />
        <History />
      </div>
    )
  }
}

export default BudgetContainer;