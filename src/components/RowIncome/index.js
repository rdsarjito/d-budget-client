import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import './style.css';

const API = `http://localhost:5000`;

class RowIncome extends Component {
  componentDidMount(){
    const GET = {
      method: 'GET',
    };

    this.props.getIncome(API, GET);
  };

  _deleteIncome = async(id) => {
    const DELETE = {
      method: 'DELETE',
    }
    const GET = {
      method: 'GET',
    };

    await this.props.deleteIncome(API, DELETE, id);

    await this.props.getIncome(API, GET);
  }

  render() {
    return this.props.incomes.map(income => {
      return (
        <tr key={income._id}>
          <td>{income.description}</td>
          <td>{income.amount}</td>
          <button onClick={() => { this._deleteIncome(income._id) }}>X</button>
        </tr>
      )
    });
  };
};

export default connect(({ incomes }) => ({ incomes }), actions)(RowIncome);