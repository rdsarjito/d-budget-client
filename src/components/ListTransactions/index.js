import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Transaction from './Transaction';
import { sortedDate } from '../../helper';

import '../../style/style.css';

class ListTransaction extends Component {
  _mapTransaction() {
    const sortTransactionsByDate = sortedDate(this.props.transactions);
    return sortTransactionsByDate.map(transaction => {
      return (
        <Transaction transaction={transaction} key={transaction._id} type='income' API={this.props.API} />
      );
    });
  }

  render() {
    return (
      <div className="list-container">
        { this._mapTransaction() }
      </div>
    )
  };
};

export default connect(({ transactions }) => ({ transactions }), actions)(ListTransaction);