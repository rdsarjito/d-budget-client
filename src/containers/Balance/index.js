import { Component } from 'react';

import TotalBalance from '../../components/TotalBalance';

import '../../style/style.css';

class Balance extends Component {
  render() {
    return (
      <div className="balance-container">
        <div className="balance-title">
          Balance
        </div>
        <TotalBalance />
      </div>
    )
  }
}

export default Balance;