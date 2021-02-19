import React from 'react';

import TotalBalance from '../../components/TotalBalance';

import '../../style/style.css';

const Balance = props => {
  return (
    <div className="w-40 mx-auto">
      <TotalBalance income={props.income} expense={props.expense} />
    </div>
  );
};


export default Balance;