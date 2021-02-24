import { Component } from 'react';

import Category from './Category';
class DropdownCategory extends Component {
  state =  {
    category: ''
  }

  render() {
    return (
      <div className="mb-6">
        <select onChange={this.props.onChange} value={this.props.category} className="select-category">
          <option value="" className="option-title">Choose One Category</option>
          <Category categories={this.props.categories} type={this.props.type} />
        </select>
        <div style={{ fontSize: 12, color: "red" }}>
          {this.props.categoryError}
        </div>
      </div>
    );
  };
};

export default DropdownCategory;