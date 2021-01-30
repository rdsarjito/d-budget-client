import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Form from '../../components/Form';
import ListTransaction from '../../components/ListTransaction';
import TotalCashFLow from '../../components/TotalCashFLow';

const API = `http://localhost:5000`;
class Income extends Component {
  componentDidMount(){
    const GET = {
      method: 'GET',
    };

    this.props.getTransaction(API, 'income', GET);
  };

  render() {
    console.log(this.props.balances)
    return (
      <main>
        <Form />
        <TotalCashFLow />
        <ListTransaction className="list-container" />
      </main>
    );
  };
};

export default connect(null, actions)(Income);