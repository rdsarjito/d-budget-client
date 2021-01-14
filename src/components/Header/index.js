import { Component } from 'react';

import './style.css';

class Header extends Component {

  render() {
    return (
      <div className="wrapper-header">
        <div className="back-button">
          <img src='http://101.50.0.139:5000/images/left-arrow.png' alt='' />
        </div>
        <div className="header-title">
          D-Budget
        </div>
      </div>
    )
  };
};

export default Header;