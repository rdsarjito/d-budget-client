import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import '../../style/style.css';

const API = `http://localhost:5000`;

class DoughnutChart extends Component {

  componentDidMount = async() => {
    const GET = {
      method: 'GET',
    };

    await this.props.get(API, 'expense', GET);
    await this.props.getCategories(API, 'category', GET);
  };

  render() {
    this.props.balances.forEach((t) => {
      const category = this.props.categories.find((c) => c.category === t.category);
      console.log(category)

      if(category) category.amount += t.amount;
    })

    const test = this.props.balances.reduce((acc, currVal) =>  acc+=parseInt(currVal.amount) , 0)
    return (
      <div>
        test
      </div>
    )
  };
};

export default connect(({ categories, balances }) => ({ categories, balances }), actions)(DoughnutChart);