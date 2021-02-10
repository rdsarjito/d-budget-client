import { Component } from 'react';
import { Link } from 'react-router-dom';
import addImage from '../../images/add.png';
import historyImage from '../../images/history.png'

import { capitalizeFirstLetter } from '../../helper';
import '../../style/style.css';

class ButtonMenu extends Component {
  _conditionImage(format) {
    if(format === 'history') {
      return <img className="mx-auto h-8 w-8" src={historyImage} alt='' />
    };
    return <img className="mx-auto h-8 w-8" src={addImage} alt='' />
  };

  render() {
    const formats = [{name: 'income'}, {name: 'expense'}, {name: 'history'}];
    return formats.map(format => {
      return (
        <Link key={format.name} className="" to={`/${format.name}`} >
          <div >
            {this._conditionImage(format.name)}
          </div>
          <div className="button-menu-title ungu">
            {capitalizeFirstLetter(format.name)}
          </div>
        </Link>
      );
    });
  };
};

export default ButtonMenu;