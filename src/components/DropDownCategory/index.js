import { Component } from 'react';

import ListCategory from '../ListCategory';

class DropdownCategory extends Component {  
  render() {
    return (
      <div className="dropdown-category">
        <select onChange={this.props._onChangeSelectCategory}>
          <option value="" className="option-title">Choose one category</option>
          <ListCategory />
        </select>
      </div>
    );
  };
};

export default DropdownCategory;