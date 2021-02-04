import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import AuthGoogle from './AuthGoogle';

class Auth extends Component {
  _renderContent() {
    switch(this.props.user) {
      case(null):
        return;
      case(false):
        return (
          <div to="/login" className="picture-profile-big">
            <img src="http://101.50.0.139:5050/images/blank-user.png" alt="user-blank" />
          </div>
        );
      default:
        return (
          <div to="/login" className="picture-profile-big">
            <img src={this.props.user.existingUser.picture} alt="user" />
          </div>
        );
    };
  };
  render() {
    return (
      <div className="profile-wrapper">
        <div>
          {this._renderContent()}
        </div>
        <div className="auth-wrapper">
          Login untuk menyimpan data
          <AuthGoogle />
        </div>
      </div>
    );
  };
};

export default connect(({ user }) => ({ user }), actions)(Auth);