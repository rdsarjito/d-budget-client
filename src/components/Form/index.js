import { Component } from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';

import * as actions from '../../actions';
import DropDownCategory from '../DropDownCategory';
import AddCategory from '../ButtonAddCategory';
import { removeMoneyDots } from '../../helper';

import '../../style/style.css';

const API = `http://localhost:5000`;

class Form extends Component {
  constructor () {
    super();
    this.state = {
      description : '',
      amount: '',
      type: ''
    };
    this._onChangeInputDescription = this._onChangeInputDescription.bind(this);
    this._onChangeInputAmount = this._onChangeInputAmount.bind(this);
    this._onChangeSelectType = this._onChangeSelectType.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  };

  _onChangeInputDescription(e) {
    this.setState({ description: e.target.value });
  };

  _onChangeInputAmount(e) {
    const amount = removeMoneyDots(e.target.value);
    this.setState({ amount });
  };

  _onChangeSelectType(e) {
    this.setState({ type: e.target.value });
  };

  _onSubmit = async(e) => {
    e.preventDefault();

    const data = {
      description: this.state.description,
      amount: this.state.amount,
      type: this.state.type,
    };
        
    const POST = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data })
    };
    
    const GET = {
      method: 'GET'
    }

    await fetch(`${API}/api/transactions`, POST);
    await this.props.get(API, GET);
    
    this.setState({
      description: '',
      amount: ''
    });
  };

  render() {
    return (
      <div className="padding-left-right">
        <AddCategory />
        <form className="form-wrapper" onSubmit={this._onSubmit}>
          <DropDownCategory />
          <select onChange={this._onChangeSelectType}>
            <option>Choose a type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <div className="form-description">
            <input type="description" className="form-description-input" placeholder="Masukan Description" onChange={this._onChangeInputDescription} value={this.state.description} />
          </div>
          <div className="form-amount">
            <div className="form-amount-title">
              Amount
            </div>
            <span className="textbox">
              Rp.
              <NumberFormat className="form-amount-input" onChange={this._onChangeInputAmount} value={this.state.amount} thousandSeparator={true} placeholder='Masukan Amount' />
            </span>
          </div>
          <button className="form-btn-simpan">
            Simpan
          </button>
        </form>
      </div>
    )
  };
};

function mapStateToProps({ balances }) {
  return { balances }
};

export default connect(mapStateToProps, actions)(Form);