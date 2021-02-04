import { Component } from 'react';
import { Link } from 'react-router-dom';

class Auth extends Component {
  render() {
    return (
      <div className="render-content-header">
        <div></div>
        <div className="nav-user">
          <Link to="/login">
            <img src="http://101.50.0.139:5050/images/blank-user.png" alt="user-blank" />
          </Link>
        </div>
      </div>
    );
  };
};

export default Auth;