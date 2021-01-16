import { Component } from 'react';
import Form from '../../components/Form';
import ListIncome from '../ListIncome';
import TotalInflow from '../../components/TotalInflow';

class Income extends Component {
  render() {
    return (
      <main>
        <Form />
        <ListIncome />
        <TotalInflow />
      </main>
    );
  };
};

export default Income;