import { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../style/style.css';


class Header extends Component {
  render() {
    return (
      <div className="wrapper-header">
        <Link to="/budget" className="back-button">
          <img src='http://101.50.0.139:5000/images/left-arrow.png' alt='' />
        </Link>
        <div className="header-title white">
          D-Budget
        </div>
      </div>
    )
  };
};

export default Header;