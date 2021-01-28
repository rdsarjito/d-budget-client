import { Component } from 'react';
import Form from '../../components/Form';
import ListTransaction from '../../components/ListTransaction';
import TotalCashFLow from '../../components/TotalCashFLow';

class Income extends Component {
  render() {
    return (
      <main>
        <Form />
        <TotalCashFLow />
        <ListTransaction className="list-container" />
      </main>
    );
  };
};

export default Income;