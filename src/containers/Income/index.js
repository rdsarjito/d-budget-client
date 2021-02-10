import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import FormTransaction from '../../components/FormTransaction';
import ListData from '../../components/ListData';
import TotalCashFlow from '../../components/TotalCashFlow';

const API = `http://localhost:5000`;

class Income extends Component {
  componentDidMount = async() =>{
    this.props.getTransaction('income');
    this.props.getCategory();
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