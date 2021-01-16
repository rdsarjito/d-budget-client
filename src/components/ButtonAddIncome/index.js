import { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class ButtonAddIncome extends Component {
  render() {
    return (
      <Link className="add-income-wrapper" to='/income' >
        <div className="button-add-income">
          +
        </div>
        <div className="add-income-title">
          Add Income
        </div>
      </Link>
    )
  }
}

export default ButtonAddIncome;