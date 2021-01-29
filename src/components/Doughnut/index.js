import { Component } from 'react';
import { connect } from 'react-redux';

import { Doughnut } from 'react-chartjs-2';

import * as actions from '../../actions';

const API = `http://localhost:5000`;

class FormCategory extends Component {
  
  componentDidMount() {
    const GET = {
      method: 'GET'
    };

    this.props.getTransaction(API, 'income', GET);
    this.props.getCategory(API, 'category', GET);
  };

  render() {
    console.log(this.props.type)
    this.props.balances.forEach((t) => {
      const category = this.props.categories.find((c) => c.category === t.category);
      if(category) category.amount += parseInt(t.amount);
    });
    const chartData = {
      datasets: [{
        data: this.props.categories.map((c) => c.amount),
        backgroundColor: this.props.categories.map((c) => c.randomColor),
      }],
      labels: this.props.categories.map((c) => c.category),
    };
    console.log(chartData)
    return (
      <div>
        <Doughnut data={chartData} />
      </div>
    );
  };
};

export default connect(({ balances, categories }) => ({ balances, categories }), actions)(FormCategory);