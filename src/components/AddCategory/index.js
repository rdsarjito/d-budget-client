import { Component } from 'react'
import { Link } from 'react-router-dom';
import addImage from '../../images/add.png'

class AddCategory extends Component {
  render() {
    return (
      <Link className="flex justify-start my-4" to={`/${'Category'}`}>
        <img className="w-8" src={addImage} alt='' />
        <div className="flex items-center ml-2">Category</div>
      </Link>
    );
  };
};

export default AddCategory;