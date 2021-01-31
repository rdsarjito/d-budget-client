import { Component } from 'react';

import Buttonadd from '../../components/ButtonMenu';

import '../../style/style.css';


class Menu extends Component {
  render() {
    return (
      <div className="menu-wrapper">
        <div className="menu-container">
          <Buttonadd />
        </div>
      </div>
    )
  }
}

export default Menu;