import { Component } from 'react';
import { connect } from 'react-redux';

import { addMoneyDots } from '../../helper';
import * as actions from '../../actions';

import '../../style/style.css';

const API = `http://localhost:5000`;

class TotalBalance extends Component {
  constructor() {
    super();
    this.state = {
      income: [],
      expense: []
    };
  };

  componentDidMount = async() => {
    const GET = {
      method: 'GET',
    };

    // const getIncome =  await fetch(`${API}/transactions`, GET);
    // const getExpense = await fetch(`${API}/transactions`, GET);
    // const dataIncome = await getIncome.json();
    // const dataExpense = await getExpense.json();

    // this.setState({ income: dataIncome, expense: dataExpense });
  };

  render() {
    const totalInflow = this.state.income.reduce((result, item) => {
      return result + parseInt(item.amount);
    }, 0);

    const totalOutflow = this.state.expense.reduce((result, item) => {
      return result + parseInt(item.amount);
    }, 0);

    const totalBalance = totalInflow - totalOutflow;

    return (
      <div className="balance-cash white">
        Rp. {addMoneyDots(totalBalance)}
      </div>
    )
  }
}

export default connect(({ balances }) => ({ balances }), actions)(TotalBalance);