import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import AuthGoogle from './AuthGoogle';

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      toggleNav: true,
      display: 'display-block'
    };
    
    this._navBar = this._navBar.bind(this);
  };

  _navBar() {
    if(this.state.toggleNav === true) {
      this.setState({ display: 'display-none', toggleNav: false })
    }
    if(this.state.toggleNav === false) {
      this.setState({ display: 'display-block', toggleNav: true })
    };
  };

  render() {
    return (
      <div className="render-content-header">
        <div></div>
        <div className="nav-user">
          <div onClick={this._navBar} className="nav-user-img">
            <div></div>
            <img src="http://101.50.0.139:5050/images/blank-user.png" alt="user" />
          </div>
          <div className={this.state.display}>Login</div>
        </div>
      </div>
    );
  };
};

export default Auth;