import { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from '../../actions';
import FormTransaction from '../../components/FormTransaction';
import ListData from '../../components/ListData';
import TotalCashFlow from '../../components/TotalCashFlow';

const API = `http://localhost:5000`;

class Expense extends Component {
  componentDidMount(){
    this.props.getTransaction('expense');
    this.props.getCategory();
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