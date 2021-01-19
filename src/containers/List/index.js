import { Component } from 'react';
import RowIncome from '../../components/Row';

import '../../style/style.css';

class List extends Component {
  render() {
    return (
      <div className="list-container">
        <RowIncome />
      </div>
    )
  };
};

export default List