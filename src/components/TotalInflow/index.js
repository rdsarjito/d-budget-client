import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import '../../style/style.css';


const API = `http://localhost:5000`;

class TotalInflow extends Component {
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

  _reducebalance() {
    const gets = this.props.balance;
    const totalInflow = gets.reduce((result, item) => {
      return result + parseInt(item.amount);
    }, 0);

    return (
      <div>
        {totalInflow}
      </div>
    )
  }

  render() {
    return (
      <div className="wrapper-total-inflow">
        <div className="number-total-inflow">
          {this._reducebalance()}
        </div>
        <div className="title-total-inflow">
          Total Inflow
        </div>
      </div>
    )
  };
};

export default connect(({ balance }) => ({ balance }), actions)(TotalInflow);