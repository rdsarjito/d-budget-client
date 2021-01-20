import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

const API = `http://localhost:5000`;

class FormContent extends Component {
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

    await this.props.add(API, format, POST);
    
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
        <button onClick={this.props.hideModalHandler} className="btn-delete">X</button>
      </form>
    );
  };
};

const mapDispatchToProps = {
  add: actions.add,
  get: actions.get
};

export default connect(null, mapDispatchToProps)(FormContent);