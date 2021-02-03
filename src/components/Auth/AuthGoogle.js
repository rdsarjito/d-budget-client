import { Component } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';

import * as actions from '../../actions';

const clientID = "760041547568-m296ef03jkijltffrhtv0p0r2ulh9fdr.apps.googleusercontent.com";

class AuthGoogle extends Component {
  responseGoogleSucces = async(code) => {
    const obj = {  
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(code)
    };

    console.log(this.props.API)

    this.props.fetchUser(this.props.API, obj)
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