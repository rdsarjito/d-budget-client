import { Component } from 'react';
import RowIncome from '../../components/RowIncome';

import '../../style/style.css';


class ListIncome extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <RowIncome />
        </tbody>
      </table>
    )
  };
};

export default ListIncome