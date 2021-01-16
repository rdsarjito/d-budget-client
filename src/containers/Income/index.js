import { Component } from 'react';
import FormIncome from '../../components/FormIncome';
import ListIncome from '../../components/ListIncome';

class Income extends Component {
  render() {
    return (
      <main>
        <FormIncome />
        <ListIncome />
      </main>
    );
  };
};

export default Income;