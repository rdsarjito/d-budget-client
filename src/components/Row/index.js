import { Component } from 'react';
import { connect } from 'react-redux';

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


  _deleteIncome = async(id) => {
    const DELETE = {
      method: 'DELETE',
    }
    const GET = {
      method: 'GET',
    };

    const format = this.state.format;

    await this.props.deleteIncome(API, format, DELETE, id);

    await this.props.get(API, format, GET);
  }

  render() {
    return this.props.balances.map(balance => {
      return (
        <tr key={balance._id}>
          <td>{balance.description}</td>
          <td>{balance.amount}</td>
          <td onClick={() => { this._deleteIncome(balance._id) }}><span className="btn-delete">X</span></td>
        </tr>
      )
    });
  };
};

export default connect(({ balances }) => ({ balances }), actions)(Row);