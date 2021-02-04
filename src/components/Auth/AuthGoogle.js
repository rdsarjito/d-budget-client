import { Component } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';

import * as actions from '../../actions';

const clientID = "760041547568-m296ef03jkijltffrhtv0p0r2ulh9fdr.apps.googleusercontent.com";

class AuthGoogle extends Component {
  responseGoogleSucces = async(code) => {
    this.props.fetchUser(code);
  };
  responseGoogleFailed(err) {
    console.log(err)
  };
  render() {
    return (
      <GoogleLogin 
        clientId={clientID}
        buttonText="Google"
        onSuccess={this.responseGoogleSucces}
        onFailure={this.responseGoogleFailed}
        accessType={'offline'}
        cookiePolicy={'single_host_origin'}
        responseType={'code'}
      />
    );
  };
};

export default connect(null, actions)(AuthGoogle);