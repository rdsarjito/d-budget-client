import { Component } from 'react';
import FormCategory from '../../components/FormCategory';
import ListCategory from '../../components/ListCategory';

class Category extends Component {
  render() {
    return (
      <main>
        <FormCategory />
        <ListCategory />
      </main>
    );
  };
};

export default Category;