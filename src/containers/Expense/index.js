import { Component } from 'react';
import Form from '../../components/Form';
import ListTransaction from '../../components/ListTransaction';
import TotalCashFlow from '../../components/TotalCashFLow';

class Expense extends Component {
  render() {
    return (
      <main>
        <Form />
        <TotalCashFlow />
        <ListTransaction className="list-container" />
      </main>
    );
  };
};

export default Expense;