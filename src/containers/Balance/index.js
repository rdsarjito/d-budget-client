import { Component } from 'react';

import TotalBalance from '../../components/TotalBalance';

import '../../style/style.css';

class Balance extends Component {
  render() {
    return (
      <div className="w-40 mx-auto">
        <TotalBalance income={this.props.income} expense={this.props.expense} />
      </div>
    )
  }
}

export default Balance;