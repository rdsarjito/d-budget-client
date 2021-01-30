import { Component } from 'react';
import { connect } from 'react-redux';

import { stringDate, addMoneyDots } from '../../helper';
import * as actions from '../../actions';

import '../../style/style.css';

const API = `http://localhost:5000`;

class Transaction extends Component {
  _deleteTransaction(id) {
    const DELETE = {
      method: 'DELETE',
    };

    const format = this.props.type;

    this.props.deleteTransaction(API, format, DELETE, id);
  };

  render() {
    const transaction = this.props.transaction;
    const date = stringDate(transaction.date);
    return (
      <div className="row-cashflow evenly-color">
        <div className="row-content">
          <div>{transaction.description}</div>
          <div>{addMoneyDots(transaction.amount)}</div>
          <div>{date}</div>
        </div>
        <div onClick={() => { this._deleteTransaction(transaction._id) }} className="btn-delete">X</div>
      </div>
    );
  };
};

export default connect(null, actions)(Transaction);