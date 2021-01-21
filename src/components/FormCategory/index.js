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

    const GET = {
      method: 'GET',
    };

    await this.props.add(API, format, POST);

    await this.props.getCategories(API, format, GET);
    
    this.setState({
      category: '',
    });
  };

  render() {
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


export default connect(null, actions)(FormCategory);