import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Transaction from './Transaction';
import { sortedDate } from '../../helper';

import '../../style/style.css';

class ListTransaction extends Component {
  render() {
    const sortTransactionsByDate = sortedDate(this.props.balances);
    return sortTransactionsByDate.map(transaction => {
      return (
        <Transaction transaction={transaction} key={transaction._id} type='income' />
      );
    });
  };
};

export default connect(({ balances }) => ({ balances }), actions)(ListTransaction);