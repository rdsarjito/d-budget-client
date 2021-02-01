import { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from '../../actions';
import FormTransaction from '../../components/FormTransaction';
import ListData from '../../components/ListData';
import TotalCashFlow from '../../components/TotalCashFlow';

const API = `http://101.50.0.139:5000`;

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
        <FormTransaction type="expense" API={API} />
        <TotalCashFlow type="expense" />
        <ListData type="expense" API={API} />
      </main>
    );
  };
};

export default connect(null, actions)(Expense);