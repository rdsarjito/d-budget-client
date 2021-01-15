import { Component } from 'react';

import './style.css';

class Income extends Component {
render() {
    return (
      <div className="income-wrapper">
        <div className="income-description">
          <input className="income-description-input" placeholder="Masukan Description" />
        </div>
        <div className="income-amount">
          <div className="income-amount-title">
            Amount
          </div>
          <input className="income-amount-input" />
        </div>
      </div>
    )
  }
}

export default Income;