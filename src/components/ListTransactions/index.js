import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Transaction from './Transaction';
import Category from './Category';
import { sortedDate } from '../../helper';

import '../../style/style.css';

class ListTransaction extends Component {
  _mapTransactions() {
    const sortTransactionsByDate = sortedDate(this.props.transactions);
    return sortTransactionsByDate.map(transaction => {
      return (
        <Transaction transaction={transaction} key={transaction._id} type={this.props.type} API={this.props.API} />
      );
    });
  };

  _mapCategories() {
    const sortDataByDate = sortedDate(this.props.categories);
    return sortDataByDate.map(category => {
      return (
        <Category category={category} key={category._id} type={this.props.type} API={this.props.API} />
      );
    });
  };

  render() {
    switch (this.props.type) {
      case 'income' || 'expense':
        return (
          <div className="list-container">
            { this._mapTransactions() }
          </div>
        );
      case 'category':
        return (
          <div className="list-container">
            { this._mapCategories() }
          </div>
        );
      default: 
        return 'type not found'
    }
  };
};

export default connect(({ transactions, categories }) => ({ transactions, categories }), actions)(ListTransaction);