import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import FormTransaction from '../../components/FormTransaction';
import ListData from '../../components/ListData';
import TotalCashFlow from '../../components/TotalCashFlow';

const API = `http://101.50.0.139:5000`;

class Income extends Component {
  componentDidMount(){
    const GET = {
      method: 'GET',
    };
    this.props.getTransaction(API, 'income', GET);
    this.props.getCategory(API, 'category', GET);
  };
  render() {
    return (
      <main>
        <FormTransaction type="income" API={API} />
        <TotalCashFlow type="income" />
        <ListData type="income" API={API} />
      </main>
    );
  };
};

export default connect(null, actions)(Income);