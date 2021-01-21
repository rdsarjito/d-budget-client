import { Component } from 'react';
import { connect } from 'react-redux';

import { sortedDate, stringDate } from '../../helper';
import * as actions from '../../actions';

import '../../style/style.css';

const API = `http://localhost:5000`;

class CategoryRow extends Component {
  constructor() {
    super();
    this.state = {
      format: ''  
    };
  };

  componentDidMount(){
    const GET = {
      method: 'GET',
    };
    
    const getPathName = window.location.pathname;
    const format = getPathName.replace("/", "");
    this.setState({ format });

    this.props.getCategories(API, format, GET);
  };

  _deleteRow = async(id) => {
    const DELETE = {
      method: 'DELETE',
    }
    const GET = {
      method: 'GET',
    };

    const format = this.state.format;

    await this.props.del(API, format, DELETE, id);

    await this.props.getCategories(API, format, GET);
  };

  render() {
    const sortDataByDate = sortedDate(this.props.categories);
    console.log(this.props.categories)
    return sortDataByDate.map(data => {
      const date = stringDate(data.date);
      return (
        <div key={data._id} className="row-cashflow evenly-color">
          <div className="row-content">
          <div>{data.category}</div>
            <div>{date}</div>
          </div>
          <div onClick={() => { this._deleteRow(data._id) }} className="btn-delete">X</div>
        </div>
      )
    });
  };
};

export default connect(({ categories }) => ({ categories }), actions)(CategoryRow);