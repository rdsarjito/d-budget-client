import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

const API = `http://localhost:5000`;

class FormCategory extends Component {
  constructor() {
    super();
    this.state = {
      category: ''
    };
    this._onChangeInputCategory = this._onChangeInputCategory.bind(this);
  };

  _onChangeInputCategory(e) {
    this.setState({ category: e.target.value });
  };

  _onSubmit = async(e) => {
    e.preventDefault();

    const data = {
      category: this.state.category,
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
    this.props.balances.forEach((t) => {
      const category = this.props.categories.find((c) => c.category === t.category);
      if(category) category.amount += parseInt(t.amount);
    });
    console.log(this.props.categories)
    return (
      <form className="form-content" onSubmit={this._onSubmit}>
        <input className="form-category-input" placeholder="Masukan Category" onChange={this._onChangeInputCategory} value={this.state.category} />
        <button>
          Simpan
        </button>
      </form>
    );
  };
};

export default connect(({ balances, categories }) => ({ balances, categories }), actions)(FormCategory);