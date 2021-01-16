import { Component } from 'react';
import FormIncome from '../../components/FormIncome';
import ListIncome from '../../components/ListIncome';
import TotalInflow from '../../components/TotalInflow';

class Income extends Component {
  render() {
    return (
      <main>
        <FormIncome />
        <ListIncome />
        <TotalInflow />
      </main>
    );
  };
};

export default Income;