import { Component } from 'react';
import Form from '../../components/Form';
import List from '../List';

class Expense extends Component {
  render() {
    return (
      <main>
        <Form />
        <List />
      </main>
    );
  };
};

export default Expense;