import { Component } from 'react';
import { connect } from 'react-redux';

import { Doughnut } from 'react-chartjs-2';

import * as actions from '../../actions';

const API = `http://101.50.0.139:5000`;

class Test extends Component {
  constructor() {
    super();
    this.state = {
      income: [],
      expense: [],
      category: []
    };
  };
  componentDidMount = async() => {
    const GET = {
      method: 'GET',
    };
    const getIncome =  await fetch(`${API}/api/income`, GET);
    const getExpense = await fetch(`${API}/api/expense`, GET);
    const getCategory = await fetch(`${API}/api/category`, GET);
    const dataIncome = await getIncome.json();
    const dataExpense = await getExpense.json();
    const dataCategory = await getCategory.json();
    this.setState({ income: dataIncome, expense: dataExpense, category: dataCategory });
  };

  _resetCategories () {
    this.state.category.forEach((c) => c.amount = 0);
  };
  
  render() {
    this._resetCategories()
    const mergeData = [...this.state.income, ...this.state.expense];
    mergeData.forEach((t) => {
      const category = this.state.category.find((c) => c.category === t.category);
      if(category) category.amount += parseInt(t.amount);
    });
    const chartData = {
      datasets: [{
        data: this.state.category.map((c) => c.amount),
        backgroundColor: this.state.category.map((c) => c.color),
      }],
      labels: this.state.category.map((c) => c.category),
    };
    console.log(chartData)
    return (
      <div>
        <Doughnut data={chartData} />
      </div>
    );
  };
};

export default connect(null, actions)(Test);