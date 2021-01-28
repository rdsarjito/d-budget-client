import { Component } from 'react';
import { connect } from 'react-redux';

import { addMoneyDots, filterArrayByObj } from '../../helper';
import * as actions from '../../actions';

import '../../style/style.css';

const API = `http://localhost:5000`;

class TotalBalance extends Component {
  componentDidMount(){
    const GET = {
      method: 'GET',
    };
    
    this.props.getTransaction(API, GET);
  };
  render() {
    const incomeData = filterArrayByObj(this.props.balances, 'income')
    const totalInflow = incomeData.reduce((result, item) => {
      return result + parseInt(item.amount);
    }, 0);

    const expenseData = filterArrayByObj(this.props.balances, 'expense')
    const totalOutflow = expenseData.reduce((result, item) => {
      return result + parseInt(item.amount);
    }, 0);

    const totalBalance = totalInflow - totalOutflow;
    console.log(totalBalance);
    return (
      <div className="balance-cash white">
        Rp. {addMoneyDots(totalBalance)}
        <h1>test</h1>
      </div>
    );
  };
};

export default connect(({ balances }) => ({ balances }), actions)(TotalBalance);