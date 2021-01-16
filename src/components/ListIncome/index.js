import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import './style.css';

const API = `http://localhost:5000`;

class ListIncome extends Component {
  constructor() {
    super();

    this._renderList = this._renderList.bind(this)
  }

  componentDidMount(){
    const obj = {
      method: 'GET',
    };

    this.props.getIncome(API, obj);
  };

  _renderList() {
    return this.props.incomes.map(income => {
      return (
        <tr key={income._id}>
          <td>{income.description}</td>
          <td>{income.amount}</td>
        </tr>
      )
    });
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {this._renderList()}
        </tbody>
      </table>
    )
  };
};

export default connect(({ incomes }) => ({ incomes }), actions)(ListIncome);