import { Component } from 'react';
import { connect } from 'react-redux';

import Transaction from './Transaction';
import { sortedDate } from '../../helper';
import * as actions from '../../actions';

import '../../style/style.css';

const API = `http://101.50.0.139:5000`;

class ListTransaction extends Component {
  constructor() {
    super(); 
    this.state = {
      type: ''  
    };
  };

  componentDidMount(){
    const GET = {
      method: 'GET',
    };
    
    const getPathName = window.location.pathname;
    const type = getPathName.replace("/", "");
    this.setState({ type });

    this.props.getTransaction(API, type, GET);
  };

  render() {
    const sortTransactionsByDate = sortedDate(this.props.balances);
    return sortTransactionsByDate.map(transaction => {
      return (
        <Transaction transaction={transaction} key={transaction._id} type={this.state.type} />
      );
    });
  };
};

export default connect(({ balances }) => ({ balances }), actions)(ListTransaction);