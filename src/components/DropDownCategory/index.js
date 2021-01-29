import { Component } from 'react';

import Category from './Category';
class DropdownCategory extends Component {  
  render() {
    return (
      <div className="dropdown-category">
        <select onChange={this.props.onChange}>
          <option value="" className="option-title">Choose one category</option>
          <Category categories={this.props.categories} />
        </select>
      </div>
    );
  };
};

export default DropdownCategory;