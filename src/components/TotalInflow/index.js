import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import './style.css';

const API = `http://localhost:5000`;

class TotalInflow extends Component {
  componentDidMount(){
    const obj = {
      method: 'GET',
    };

    this.props.getIncome(API, obj);
  };

  _reduceIncomes() {
    const getIncomes = this.props.incomes;
    const totalInflow = getIncomes.reduce((result, item) => {
      return result + parseInt(item.amount);
    }, 0);

    return (
      <div>
        {totalInflow}
      </div>
    )
  }

  render() {
    return (
      <div className="wrapper-total-inflow">
        <div className="number-total-inflow">
          {this._reduceIncomes()}
        </div>
        <div className="title-total-inflow">
          Total Inflow
        </div>
      </div>
    )
  };
};

export default connect(({ incomes }) => ({ incomes }), actions)(TotalInflow);