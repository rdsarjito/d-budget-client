import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import '../../style/style.css';

class Header extends Component {
  _conditionHeader(path) {
    if(path === 'budget') {
      return (
        <div className="wrapper-header">
          <div className="back-button"></div>
          <div  className="header-title white">D-Budget</div>
        </div>
      )
    }
    return (
      <div className="wrapper-header">
        <Link to="/budget" className="back-button">
          <img src='http://101.50.0.139:5000/images/left-arrow.png' alt='' />
        </Link>
        <div className="header-title white">
          {path}
        </div>
      </div>
      )
  };
  
  render() {
    const path = this.props.location.pathname.slice(1);
    return this._conditionHeader(path);
  };
};

export default withRouter(Header);