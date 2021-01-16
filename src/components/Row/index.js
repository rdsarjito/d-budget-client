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
    return this.props.balance.map(income => {
      return (
        <tr key={income._id}>
          <td>{income.description}</td>
          <td>{income.amount}</td>
          <td onClick={() => { this._deleteIncome(income._id) }}><span className="btn-delete">X</span></td>
        </tr>
      )
    });
  };
};

export default connect(({ balance }) => ({ balance }), actions)(Row);