import { Component } from 'react';
import { connect } from 'react-redux';

import { stringDate, addMoneyDots } from '../../helper';
import * as actions from '../../actions';

import '../../style/style.css';

const API = `http://localhost:5000`;

class Transaction extends Component {
  _deleteTransaction = async(id) => {
    const DELETE = {
      method: 'DELETE',
    };

    const GET = {
      method: 'GET',
    };

    const format = this.props.type;

    await this.props.deleteTransaction(API, format, DELETE, id);

    await this.props.getTransaction(API, format, GET);
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

export default connect(({ balances }) => ({ balances }), actions)(Transaction);