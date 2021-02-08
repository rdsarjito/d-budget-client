import { Component } from 'react';

import Balance from '../Balance';
import Menu from '../Menu';
import Doughnut from '../../components/Doughnut';

import '../../style/style.css';

const API = `http://localhost:5000`;

class BudgetContainer extends Component {
  state = {
    income: [],
    expense: [],
    category: []
  };
  componentDidMount = async() => {
    const token = localStorage.getItem('jwt_token');
    if(token === null) {
      return;
    };
    
    const GET = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('jwt_token'))[0].accesToken
      }
    };

    const getIncome =  await fetch(`${API}/income`, GET);
    const getExpense = await fetch(`${API}/expense`, GET);
    
    const dataIncome = await getIncome.json();
    const dataExpense = await getExpense.json();
    this.setState({ income: dataIncome, expense: dataExpense });
  };
  render() {
    return (
      <main>
        <Balance income={this.state.income} expense={this.state.expense} />
        <Doughnut income={this.state.income} expense={this.state.expense} category={this.state.category} />
        <Menu />
      </main>
    )
  }
}

export default BudgetContainer;