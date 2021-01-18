import { Component } from 'react';

import Balance from '../Balance';
import Menu from '../Menu';

import HistoryRow from '../../components/HistoryRow';
import '../../style/style.css';


class BudgetContainer extends Component {
  render() {
    return (
      <div>
        <Balance />
        <Menu />
        <HistoryRow />
      </div>
    )
  }
}

export default BudgetContainer;