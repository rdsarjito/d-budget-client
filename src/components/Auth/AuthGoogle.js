import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import GoogleLogin from 'react-google-login';

const clientID = "760041547568-m296ef03jkijltffrhtv0p0r2ulh9fdr.apps.googleusercontent.com";


class AuthGoogle extends Component {
  render() {
    return (
      <GoogleLogin 
        clientId={clientID}
        buttonText="Login"
      />
    );
  };
};

export default AuthGoogle;