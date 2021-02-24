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
  
      this.props.addTransaction(this.props.type, data);
      
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
      <div className="hidden md:block pr-4 pl-4 py-10 flex flex-col items-center justify-center bg-gray-300">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md mx-auto">
          <AddCategory />
          <form onSubmit={this._onSubmit}>
            <DropDownCategory 
              onChange={this._onChangeSelectCategory} 
              categories={this.props.categories}
              category={this.state.category}
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
      </div>
    );
  };
};

export default connect(({ transactions, categories }) => ({ transactions, categories }), actions)(Form);