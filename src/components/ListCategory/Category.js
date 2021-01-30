import { Component } from 'react';
import { connect } from 'react-redux';

import { stringDate } from '../../helper';
import * as actions from '../../actions';

import '../../style/style.css';

const API = `http://localhost:5000`;

class Category extends Component {
  _deleteCategory(id) {
    const DELETE = {
      method: 'DELETE',
    }

    this.props.deleteCategory(API, 'category', DELETE, id);
  };

  render() {
    const category = this.props.category;
    const date = stringDate(category.date);
    return (
      <div key={category._id} className="row-cashflow evenly-color">
        <div className="row-content">
        <div>{category.category}</div>
          <div>{date}</div>
        </div>
        <div onClick={() => { this._deleteCategory(category._id) }} className="btn-delete">X</div>
      </div>
    )
  };
};

export default connect(({ categories }) => ({ categories }), actions)(Category);