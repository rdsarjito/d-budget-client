import { Component } from 'react';
import { Link } from 'react-router-dom';
import addImage from '../../images/add.png';
import historyImage from '../../images/history.png'

import '../../style/style.css';

class ButtonMenu extends Component {
  _conditionImage(format) {
    if(format === 'history') {
      return <img src={historyImage} alt='' />
    };
    return <img src={addImage} alt='' />
  };

  render() {
    const formats = [{name: 'income'}, {name: 'expense'}, {name: 'history'}];
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