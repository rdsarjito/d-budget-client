import { Component } from 'react';

import Buttonadd from '../../components/ButtonMenu';

import '../../style/style.css';


class Menu extends Component {
  render() {
    return (
      
      <div className="menu-container">
        <Buttonadd />
      </div>
    )
  }
}

export default Menu;