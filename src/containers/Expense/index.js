import { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from '../../actions';
import Form from '../../components/Form';
import ListData from '../../components/ListData';
import TotalCashFlow from '../../components/TotalCashFlow';

const API = `http://localhost:5000`;

class Expense extends Component {
  componentDidMount(){
    const GET = {
      method: 'GET',
    };
    this.props.getTransaction(API, 'expense', GET);
    this.props.getCategory(API, 'category', GET);
  };
  render() {
    return (
      <main>
        <Form type="expense" API={API} />
        <TotalCashFlow type="expense" />
        <ListData type="expense" API={API} />
      </main>
    );
  };
};

export default connect(null, actions)(Expense);