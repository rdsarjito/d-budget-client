import { Component } from 'react';
import { Link } from 'react-router-dom';

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      toggleNav: true,
      display: 'display-none'
    };
    
    this._navBar = this._navBar.bind(this);
  };

  _navBar() {
    if(this.state.toggleNav === true) {
      this.setState({ display: null, toggleNav: false })
    }
    if(this.state.toggleNav === false) {
      this.setState({ display: 'display-none', toggleNav: true })
    };
  };

  render() {
    return (
      <div className="render-content-header">
        <div></div>
        <div className="nav-user">
          <div  className="nav-user-img">
            <div></div>
            <img src="http://101.50.0.139:5050/images/blank-user.png" alt="user" onClick={this._navBar} />
          </div>
          <Link className={this.state.display} to="/login">Login</Link>
        </div>
      </div>
    );
  };
};

export default Auth;