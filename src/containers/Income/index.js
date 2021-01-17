import { Component } from 'react';
import Form from '../../components/Form';
import List from '../List';
import TotalCashFLow from '../../components/TotalCashFLow';

class Income extends Component {
  render() {
    return (
      <main>
        <Form />
        <List />
        <TotalCashFLow />
      </main>
    );
  };
};

export default Income;