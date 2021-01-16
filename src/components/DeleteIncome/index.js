import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';


const API = `http://localhost:5000`;

class RowIncome extends Component {
  componentDidMount(){
    const obj = {
      method: 'GET',
    };

    this.props.getIncome(API, obj);
  };

  _deleteIncome(id) {
    this.props.deleteIncome(id);
    this.props.getIncome()
  };

  render() {
    console.log(this.key)
    return (
      <span>X</span>
    )
  };
};

export default connect(({ incomes }) => ({ incomes }), actions)(RowIncome);