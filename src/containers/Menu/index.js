import { Component } from 'react';

import ButtonAddIncome from '../../components/ButtonAddIncome';

import '../../style/style.css';


class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
        <ButtonAddIncome />
        <ButtonAddIncome />
        <ButtonAddIncome />
      </div>
    )
  }
}

export default Menu;