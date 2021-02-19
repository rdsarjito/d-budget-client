import { Component } from 'react'
import { Link } from 'react-router-dom';
import addImage from '../../images/add.png'

class AddCategory extends Component {
  render() {
    return (
      <Link className="button-add-category wrapper-button-add-category wrapper-button-add-category" to={`/${'Category'}`}>
        <img className="w-8" src={addImage} alt='' />
        <div className="add-category-title">Category</div>
      </Link>
    );
  };
};

export default AddCategory;