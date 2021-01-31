import { Component } from 'react';

import Category from './Category';
class DropdownCategory extends Component {  
  render() {
    return (
      <div className="dropdown-category">
        <select onChange={this.props.onChange} className="select-category">
          <option value="" className="option-title">Choose one category</option>
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