import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import { addMoneyDots } from '../../helper';

import '../../style/style.css';

class TotalCashFlow extends Component {
  render() {
    const totalAmount = this.props.transactions.reduce((result, item) => {
      return result + parseInt(item.amount);
    }, 0);
    return (
      <div className="mx-auto w-40">
        <div className="number-total-cashflow">
          Total {this.props.type}: {addMoneyDots(totalAmount)}
        </div>
      </div>
    );
  };
};

export default connect(({ transactions }) => ({ transactions }), actions)(TotalCashFlow);