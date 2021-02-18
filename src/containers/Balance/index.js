import React from 'react';

import TotalBalance from '../../components/TotalBalance';

import '../../style/style.css';

const Balance = () => {
  return (
    <div className="w-40 mx-auto">
      <TotalBalance income={this.props.income} expense={this.props.expense} />
    </div>
  );
};


export default Balance;