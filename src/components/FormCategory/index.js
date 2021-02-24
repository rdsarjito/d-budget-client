import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import { randomArray } from '../../helper';

class FormCategory extends Component {
  constructor() {
    super();
    this.state = {
      type: '',
      category: '',
      typeError: '',
      categoryError: ''
    };
    this._onChangeInputCategory = this._onChangeInputCategory.bind(this);
    this._onChangeSelectCategory = this._onChangeSelectCategory.bind(this);
  };

  _onChangeInputCategory(e) {
    this.setState({ category: e.target.value });
  };

  _onChangeSelectCategory(e) {
    this.setState({ type: e.target.value })
  };

  _condition(type) {
    const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
    const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];
    if(type === 'income') {
      return randomArray(incomeColors)
    };
    return randomArray(expenseColors);
  };

  _validateForm() {
    let typeError = "";
    let categoryError = "";

    if (!this.state.type) {
      typeError = "Type cannot be blank"
    };

    if (!this.state.category) {
      categoryError = "Category cannot be blank";
    };

    if (typeError || categoryError) {
      this.setState({ typeError, categoryError });
      return false;
    };

    return true;
  };

  _onSubmit = async(e) => {
    e.preventDefault();
    const isValid = this._validateForm();

    if(isValid) {
      const color = this._condition(this.state.type);

      const data = {
        category: this.state.category,
        typeBalance: this.state.type,
        color
      };
  
      await this.props.addCategory(data);
      
      this.setState({
        type: '',
        category: '',
        typeError: '',
        categoryError: ''
      });
    };
  };

  render() {
    return (
      <div className="md:block pr-4 pl-4 py-10 flex flex-col items-center justify-center bg-gray-300">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md mx-auto">
          <form onSubmit={this._onSubmit}>
            <select className="mb-6" value={this.state.type} onChange={this._onChangeSelectCategory}>
              <option>Choose a Type</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.typeError}
            </div>
            <div className="flex flex-col mb-6">
              <input className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Masukan Category" onChange={this._onChangeInputCategory} value={this.state.category} />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.categoryError}
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

export default connect(({ categories }) => ({ categories }), actions)(FormCategory);