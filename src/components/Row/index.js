import { Component } from 'react';
import { connect } from 'react-redux';

import { sortedDate, stringDate, addMoneyDots, filterArrayByObj } from '../../helper';
import * as actions from '../../actions';

import '../../style/style.css';

const API = `http://localhost:5000`;

class Row extends Component {
  componentDidMount(){
    const GET = {
      method: 'GET',
    };
    
    this.props.get(API, GET);
  };

  _deleteRow = async(id) => {
    const DELETE = {
      method: 'DELETE',
    }
    const GET = { 
      method: 'GET',
    };

    await fetch(`${API}/api/transactions/` + id, DELETE);

    await this.props.get(API, GET);
  };

  render() {
    const getPathName = window.location.pathname;
    const format = getPathName.replace("/", "");
    const filterTransactions = filterArrayByObj(this.props.balances, format);
    const sortDataByDate = sortedDate(filterTransactions);
    
    return sortDataByDate.map(data => {
      const date = stringDate(data.date);
      return (
        <div key={data._id} className="row-cashflow evenly-color">
          <div className="row-content">
            <div>{data.description}</div>
            <div>{addMoneyDots(data.amount)}</div>
            <div>{date}</div>
          </div>
          <div onClick={() => { this._deleteRow(data._id) }} className="btn-delete">X</div>
        </div>
      )
    });
  };
};

export default connect(({ balances }) => ({ balances }), actions)(Row);