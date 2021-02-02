import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import { randomArray } from '../../helper';

const API = `http://localhost:5000`;

class FormCategory extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      type: ''
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

  _onSubmit = async(e) => {
    e.preventDefault();
    
    const color = this._condition(this.state.type);

    const data = {
      category: this.state.category,
      typeBalance: this.state.type,
      color
    };

    const format = 'category';
    
    const POST = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data })
    };


    await this.props.addCategory(API, format, POST);
    
    this.setState({
      category: '',
    });
  };

  render() {
    return (
      <form className="form-content" onSubmit={this._onSubmit}>
        <select onChange={this._onChangeSelectCategory}>
          <option>Pilih Satu Woi</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input className="form-category-input" placeholder="Masukan Category" onChange={this._onChangeInputCategory} value={this.state.category} />
        <button>
          Simpan
        </button>
      </form>
    );
  };
};

export default connect(({ categories }) => ({ categories }), actions)(FormCategory);