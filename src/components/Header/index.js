import { Component } from 'react';
import './style.css';

import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <NavLink to="/budget"  className="navLink" activeClassName="selected">
          Budget
        </NavLink>
        <NavLink to="/reports"  className="navLink" activeClassName="selected">
          Reports
        </NavLink>
      </div>
    )
  }
}

export default Header;