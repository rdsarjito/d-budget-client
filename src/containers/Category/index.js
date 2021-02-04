import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import FormCategory from '../../components/FormCategory';
import ListData from '../../components/ListData';

const API = `http://localhost:5000`;

class Category extends Component {
  componentDidMount(){
    const GET = {
      method: 'GET',
    };
    this.props.getCategory(API, 'category', GET);
  };
  
  render() {
    return (
      <main>
        <FormCategory type="category" />
        <ListData type="category" API={API} />
      </main>
    );
  };
};

export default connect(null, actions)(Category);