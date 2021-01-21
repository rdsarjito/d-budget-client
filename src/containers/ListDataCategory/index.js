import { Component } from 'react';
import CategoryRow from '../../components/CategoryRow';

class ListCategory extends Component {
  render() {
    return (
      <main>
        <CategoryRow className="list-container" />
      </main>
    );
  };
};

export default ListCategory;