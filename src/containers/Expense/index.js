import { Component } from 'react';
import Form from '../../components/Form';
import ListTransactions from '../../components/ListTransactions';
import TotalCashFlow from '../../components/TotalCashFLow';

class Expense extends Component {
  render() {
    return (
      <main>
        <Form />
        <TotalCashFlow />
        <ListTransactions className="list-container" />
      </main>
    );
  };
};

export default Expense;