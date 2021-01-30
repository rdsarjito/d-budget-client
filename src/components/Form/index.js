import { Component } from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';

import * as actions from '../../actions';
import DropDownCategory from '../DropDownCategory';
import AddCategory from '../AddCategory';
import { removeMoneyDots } from '../../helper';

import '../../style/style.css';

class Form extends Component {
  constructor () {
    super();
    this.state = {
      description : '',
      amount: '',
      category: '',
    };
    this._onChangeInputDescription = this._onChangeInputDescription.bind(this);
    this._onChangeInputAmount = this._onChangeInputAmount.bind(this);
    this._onChangeSelectCategory = this._onChangeSelectCategory.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  };

  _onChangeInputDescription(e) {
    this.setState({ description: e.target.value });
  };

  _onChangeInputAmount(e) {
    const amount = removeMoneyDots(e.target.value);
    this.setState({ amount });
  };

  _onChangeSelectCategory(e) {
    this.setState({ category: e.target.value });
  };

  _onSubmit(e) {
    e.preventDefault();

    const data = {
      description: this.state.description,
      amount: this.state.amount,
      category: this.state.category,
    };
        
    const POST = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data })
    };

    this.props.addTransaction(this.props.API, this.props.type, POST);
    
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
          <DropDownCategory onChange={this._onChangeSelectCategory} categories={this.props.categories} />
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

export default connect(({ transactions, categories }) => ({ transactions, categories }), actions)(Form);