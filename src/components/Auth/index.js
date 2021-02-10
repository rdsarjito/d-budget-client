import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../actions';
import { getLocalStorage } from '../../helper';
import blankUserImage from '../../images/blank-user.png';
import AuthGoogle from './LoginGoogle';

class Auth extends Component {
  state = {
    redirect: false
  };

  _logoutButton = async () => {
    await localStorage.clear();
    await this.props.getTransaction();
    await this.props.getCategory();
    this.setState({ redirect: true });
  };

  _renderImage() {
    if(getLocalStorage('profile')[1]){
      return (
        <div>
          <div to="/login" >
            <img src={getLocalStorage('profile')[1].userData.picture} alt="user" />
          </div>
          <div className="auth-wrapper">
            <button onClick={this._logoutButton}>Logout</button>
          </div>
        </div>
      );
    };
    return (
      <div>
        <div to="/login" className="picture-profile">
          <img src={blankUserImage} alt="user-blank" />
        </div>
        <div className="auth-wrapper">
          Login untuk menyimpan data
          <AuthGoogle />
        </div>
      </div>
    );
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to='/dashboard'/>;
    };
    return (
      <div className="profile-wrapper">
        {this._renderImage()}
      </div>
    );
  };
};

export default connect(({ user }) => ({ user }), actions)(Auth);