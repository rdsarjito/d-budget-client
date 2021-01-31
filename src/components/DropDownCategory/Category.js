import { Component } from 'react';

import { filterArrayByObj } from '../../helper';
class Category extends Component {
  render() {
    // const filterByType = filterArrayByObj(this.props.categories, this.props.type)
    console.log(this.props.categories)
    return this.props.categories.map((dataCategory) => {
      return (
        <option key={dataCategory._id} value={`${dataCategory.category}`}>{dataCategory.category}</option>
      );
    });
  };
};

export default Category;