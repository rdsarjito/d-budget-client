import { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../style/style.css';

const formats = [{name: 'income'}, {name: 'expense'}, {name: 'history'}];

class ButtonMenu extends Component {
  _caseFormat(format) {
    switch(format.name) {
      case('history'):
        return 'History'
      default:
        return `Add ${format.name}`
    }
  }

  render() {
    return formats.map(format => {
      return (
        <Link key={format.name} className="button-menu-wrapper" to={`/${format.name}`} >
          <div className="button-menu-add">
            +
          </div>
          <div className="button-menu-title">
            {this._caseFormat(format)}
          </div>
        </Link>
      );
    });
  };
};

export default ButtonMenu;