import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Category from './Category';
import { sortedDate } from '../../helper';

import '../../style/style.css';

class ListCategories extends Component {
  _mapCategories() {
    const sortDataByDate = sortedDate(this.props.categories);
    return sortDataByDate.map(category => {
      return (
        <Category category={category} />
      );
    });
  };

  render() {
    return (
      <div>
        { this._mapCategories() }
      </div>
    )
  };
};

export default connect(({ categories }) => ({ categories }), actions)(ListCategories);