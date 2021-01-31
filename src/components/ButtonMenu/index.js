import { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../style/style.css';

const formats = [{name: 'income'}, {name: 'expense'}, {name: 'history'}];

class ButtonMenu extends Component {
  _conditionImage(format) {
    if(format === 'history') {
      return <img src='http://101.50.0.139:5050/images/history.png' alt='' />
    };
    return <img src='http://101.50.0.139:5050/images/add.png' alt='' />
  };

  render() {
    return formats.map(format => {
      return (
        <Link key={format.name} className="button-menu-wrapper" to={`/${format.name}`} >
          <div className="button-menu-add">
            {this._conditionImage(format.name)}
          </div>
          <div className="button-menu-title ungu">
            {format.name}
          </div>
        </Link>
      );
    });
  };
};

export default ButtonMenu;