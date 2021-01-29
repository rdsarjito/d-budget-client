import { Component } from 'react';

class Category extends Component {
  render() {
    return this.props.categories.map((dataCategory) => {
      return (
        <option key={dataCategory._id} value={`${dataCategory.category}`}>{dataCategory.category}</option>
      );
    });
  };
};

export default Category;