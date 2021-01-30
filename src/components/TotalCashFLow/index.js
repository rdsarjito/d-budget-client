import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import { addMoneyDots } from '../../helper';

import '../../style/style.css';

class TotalCashFlow extends Component {
  render() {
    const totalAmount = this.props.balances.reduce((result, item) => {
      return result + parseInt(item.amount);
    }, 0);
    return (
      <div className="wrapper-total-cashflow">
        <div className="number-total-cashflow">
          Total {this.props.type}: {addMoneyDots(totalAmount)}
        </div>
      </div>
    );
  };
};

export default connect(({ balances }) => ({ balances }), actions)(TotalCashFlow);