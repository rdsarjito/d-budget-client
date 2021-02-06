import { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';

import * as actions from '../../actions';
import { Redirect } from 'react-router-dom';

const clientID = "760041547568-m296ef03jkijltffrhtv0p0r2ulh9fdr.apps.googleusercontent.com";

class LoginGoogle extends Component {
  state = {
    redirect: false
  };

  responseGoogleSucces = async(code) => {
    await this.props.adduser(code);
    await this.props.getUser();
    this.setState({ redirect: true });
  };

  responseGoogleFailed(err) {
    console.log(err);
  };

  _renderContent() {
    <div>
      <GoogleLogin 
        clientId={clientID}
        buttonText="Google"
        onSuccess={this.responseGoogleSucces}
        onFailure={this.responseGoogleFailed}
        accessType={'offline'}
        cookiePolicy={'single_host_origin'}
        responseType={'code'}
      />
    </div>
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to='/budget'/>;
    };
    return (
      <div>
        <GoogleLogin 
        clientId={clientID}
        buttonText="Google"
        onSuccess={this.responseGoogleSucces}
        onFailure={this.responseGoogleFailed}
        accessType={'offline'}
        cookiePolicy={'single_host_origin'}
        responseType={'code'}
      />
      </div>
    );
  };
};

export default connect(({ user }) => ({ user }), actions)(LoginGoogle);