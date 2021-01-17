import { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../style/style.css';

const formats = [{name: 'income'}, {name: 'expense'}];

class ButtonMenu extends Component {
  render() {
    return formats.map(format => {
      return (
        <Link key={format.name} className="button-menu-wrapper" to={`/${format.name}`} >
          <div className="button-menu-add">
            Add
          </div>
          <div className="button-menu-title">
            {format.name}
          </div>
        </Link>
      );
    });
  };
};

export default ButtonMenu;