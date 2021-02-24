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
            <div className="flex flex-col mb-6">
              <input type="description" className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Description" onChange={this._onChangeInputDescription} value={this.state.description} />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.descriptionError}
              </div>
            </div>
            <div className="mb-6">
              <div className="mb-1">
                Amount
              </div>
              <span className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400">
                Rp.
                <NumberFormat onChange={this._onChangeInputAmount} value={this.state.amount} thousandSeparator={true} placeholder='Amount' />
              </span>
              <div className="mt-1" style={{ fontSize: 12, color: "red" }}>
                {this.state.amountError}
              </div>
            </div>
            <div className="flex w-full">
              <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                <span className="mr-2 uppercase">Save</span>
                  <span>
                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
};

export default connect(({ transactions, categories }) => ({ transactions, categories }), actions)(Form);