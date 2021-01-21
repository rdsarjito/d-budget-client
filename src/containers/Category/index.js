import { Component } from 'react';
import FormCategory from '../../components/FormCategory';
import CategoryRow from '../../components/CategoryRow';

class Category extends Component {
  render() {
    return (
      <main>
        <FormCategory />
        <CategoryRow />
      </main>
    );
  };
};

export default Category;