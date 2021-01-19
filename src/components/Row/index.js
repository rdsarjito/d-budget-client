import { Component } from 'react';
import { connect } from 'react-redux';

import { sortedDate } from '../../helper';
import * as actions from '../../actions';

import '../../style/style.css';


const API = `http://localhost:5000`;

class Row extends Component {
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

  _deleteRow = async(id) => {
    const DELETE = {
      method: 'DELETE',
    }
    const GET = {
      method: 'GET',
    };

    const format = this.state.format;

    await this.props.del(API, format, DELETE, id);

    await this.props.get(API, format, GET);
  };

  render() {
    const sortDate = sortedDate(this.props.balances);
    return this.props.balances.map(balance => {
      return (
        <div key={balance._id} className="row-cashflow evenly-color">
          <div className="row-content">
            <div>{balance.description}</div>
            <div>{balance.amount}</div>
          </div>
          <div onClick={() => { this._deleteRow(balance._id) }} className="btn-delete">X</div>
        </div>
      )
    });
  };
};

export default connect(({ balances }) => ({ balances }), actions)(Row);