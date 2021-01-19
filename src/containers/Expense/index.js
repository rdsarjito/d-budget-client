import { Component } from 'react';
import Form from '../../components/Form';
import List from '../List';
import TotalCashFlow from '../../components/TotalCashFLow';

class Expense extends Component {
  render() {
    return (
      <main>
        <Form />
        <TotalCashFlow />
        <List />
      </main>
    );
  };
};

export default Expense;