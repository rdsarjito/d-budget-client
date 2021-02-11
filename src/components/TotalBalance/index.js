import { Component } from 'react';
import { connect } from 'react-redux';

import { addMoneyDots } from '../../helper';
import * as actions from '../../actions';

import '../../style/style.css';
class TotalBalance extends Component {
  render() {
    const totalInflow = this.props.income.reduce((result, item) => {
      return result + parseInt(item.amount);
    }, 0);
    const totalOutflow = this.props.expense.reduce((result, item) => {
      return result + parseInt(item.amount);
    }, 0);
    const totalBalance = totalInflow - totalOutflow;
    if(totalBalance === 0) {
      return <div className="hidden"></div>
    }
    return (
      <div>
        <div className="text-center w-20 mx-auto">
          Balance
        </div>
        <div className="text-center">
          Rp. {addMoneyDots(totalBalance)}
        </div>
      </div>
    )
  }
}
export default connect(null, actions)(TotalBalance);