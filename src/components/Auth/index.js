import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import AuthGoogle from './AuthGoogle';

class Auth extends Component {
  render() {
    return (
      <div className="auth-google">
        <AuthGoogle />
      </div>
    );
  };
};

export default Auth;