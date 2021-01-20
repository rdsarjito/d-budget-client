import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import ListCategory from './ListCategory';

const API = `http://localhost:5000`;

class Category extends Component {
  componentDidMount(){
    const GET = {
      method: 'GET',
    };
    
    const format = 'category';

    this.props.getCategories(API, format, GET);
  };
  render() {
    return (
      <div className="form-category">
        <div className="dropdown-category">
          <select>
            <option value="" className="option-title">Choose one category</option>
            <ListCategory />
          </select>
        </div>
      </div>
    );
  };
};

function mapStateToProps({ categories }) {
  return { categories }
};

export default connect(mapStateToProps, actions)(Category);