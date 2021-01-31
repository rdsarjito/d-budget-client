import { Component } from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';

import DropDownCategory from '../DropDownCategory';
import AddCategory from '../AddCategory';
import { removeMoneyDots } from '../../helper';

import '../../style/style.css';

class Form extends Component {
  constructor () {
    super();
    this.state = {
      category: '',
      description : '',
      amount: '',
      categoryError: '',
      descriptionError: '',
      amountError: '',
    };
    this._onChangeSelectCategory = this._onChangeSelectCategory.bind(this);
    this._onChangeInputDescription = this._onChangeInputDescription.bind(this);
    this._onChangeInputAmount = this._onChangeInputAmount.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  };

  _onChangeSelectCategory(e) {
    this.setState({ category: e.target.value });
  };

  _onChangeInputDescription(e) {
    this.setState({ description: e.target.value });
  };

  _onChangeInputAmount(e) {
    const amount = removeMoneyDots(e.target.value);
    this.setState({ amount });
  };

  _validateForm() {
    let categoryError = "";
    let descriptionError = "";
    let amountError = "";

    if (!this.state.category) {
      categoryError = "Category cannot be blank";
    };

    if (!this.state.description) {
      descriptionError = "Description cannot be blank"
    };

    if (!this.state.amount) {
      amountError = "Amount cannot be blank"
    };

    if (categoryError || descriptionError || amountError) {
      this.setState({ categoryError, descriptionError, amountError });
      return false;
    };

    return true;
  };

  _onSubmit(e) {
    e.preventDefault();
    const isValid = this._validateForm();

    if (isValid) {
      const data = {
        category: this.state.category,
        description: this.state.description,
        amount: this.state.amount,
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
        category: '',
        description : '',
        amount: '',
        categoryError: '',
        descriptionError: '',
        amountError: '',
      });
    };
  };

  render() {
    return (
      <div className="padding-left-right">
        <AddCategory />
        <form className="form-wrapper" onSubmit={this._onSubmit}>
          <DropDownCategory 
            onChange={this._onChangeSelectCategory} 
            categories={this.props.categories} 
            categoryError={this.state.categoryError} 
            type={this.props.type} 
          />
          <div className="form-description">
            <input type="description" className="form-description-input" placeholder="Description" onChange={this._onChangeInputDescription} value={this.state.description} />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.descriptionError}
            </div>
          </div>
          <div className="form-amount">
            <div className="form-amount-title">
              Amount
            </div>
            <span className="textbox">
              Rp.
              <NumberFormat className="form-amount-input" onChange={this._onChangeInputAmount} value={this.state.amount} thousandSeparator={true} placeholder='Amount' />
            </span>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.amountError}
            </div>
          </div>
          <button className="form-btn-simpan">
            Simpan
          </button>
        </form>
      </div>
    )
  };
};

export default connect(({ transactions, categories }) => ({ transactions, categories }))(Form);