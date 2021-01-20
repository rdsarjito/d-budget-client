import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

// const API = `http://localhost:5000`;

class Category extends Component {
  render() {
    return (
      <div className="form-category">
        <div className="dropdown-category">
          <select onChange={this._onChangeSelectCategory}>
            <option value="" className="option-title">Choose one category</option>
            <option value="food">Food</option>
            <option value="bill">Bill</option>
          </select>
        </div>
      </div>
    )
  };
};

function mapStateToProps({ balances }) {
  return { balances }
};

const mapDispatchToProps = {
  add: actions.add,
  get: actions.get
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);