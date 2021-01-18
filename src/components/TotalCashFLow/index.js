import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import '../../style/style.css';


const API = `http://localhost:5000`;

class TotalCashFlow extends Component {
  constructor() {
    super(); 
    this.state = {
      format: ''
    };
  };

  componentDidMount(){
    const GET = {
      method: 'GET',
    };

    const getPathName = window.location.pathname;
    const format = getPathName.replace("/", "");
    this.setState({ format });

    this.props.get(API, format, GET);
  };

  render() {
    const gets = this.props.balances;
    const totalInflow = gets.reduce((result, item) => {
      return result + parseInt(item.amount);
    }, 0);
    return (
      <div className="wrapper-total-cashflow">
        <div className="number-total-cashflow">
          {totalInflow}
        </div>
        <div className="title-total-cashflow">
          Total Cashflow
        </div>
      </div>
    );
  };
};

export default connect(({ balances }) => ({ balances }), actions)(TotalCashFlow);