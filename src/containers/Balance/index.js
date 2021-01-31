import { Component } from 'react';

import TotalBalance from '../../components/TotalBalance';

import '../../style/style.css';

class Balance extends Component {
  render() {
    return (
      <div>
        <div className="balance-container">
          <div className="balance-title white">
            Balance
          </div>
          <TotalBalance income={this.props.income} expense={this.props.expense} />
        </div>
      </div>
    )
  }
}

export default Balance;