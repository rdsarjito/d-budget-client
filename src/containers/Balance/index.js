import { Component } from 'react';

import '../../style/style.css';

class Balance extends Component {
  render() {
    return (
      <div className="balance-container">
        <div className="balance-title">
          Balance
        </div>
        <div className="balance-cash">
          Rp. 30.000.000
        </div>
      </div>
    )
  }
}

export default Balance;