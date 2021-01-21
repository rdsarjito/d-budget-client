import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

const API = `http://localhost:5000`;

class ListCategory extends Component {
  componentDidMount(){
    const GET = {
      method: 'GET',
    };
    
    const format = 'category';

    this.props.getCategories(API, format, GET);
  };

  render() {
    const dataCategories = this.props.categories;
    return dataCategories.map((dataCategory) => {
      return (
        <option key={dataCategory._id} value={`${dataCategory.category}`}>{dataCategory.category}</option>
      );
    });
  };
};

function mapStateToProps({ categories }) {
  return { categories }
};

export default connect(mapStateToProps, actions)(ListCategory);