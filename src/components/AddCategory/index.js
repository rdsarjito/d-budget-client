import { Component } from 'react'
import { Link } from 'react-router-dom';

class AddCategory extends Component {
  render() {
    return (
      <Link className="button-add-category wrapper-button-add-category wrapper-button-add-category" to={`/${'Category'}`}>
        <img src='http://101.50.0.139:5050/images/add.png' alt='' />
        <div className="add-category-title">Category</div>
      </Link>
    );
  };
};

export default AddCategory;