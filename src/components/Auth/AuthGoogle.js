import { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import * as actions from '../../actions';
import { Redirect } from 'react-router-dom';

const clientID = "760041547568-m296ef03jkijltffrhtv0p0r2ulh9fdr.apps.googleusercontent.com";

class AuthGoogle extends Component {
  state = {
    redirect: false
  };

  responseGoogleSucces = async(code) => {
    await this.props.adduser(code);
    await this.props.getUser()
    this.setState({ redirect: true });
  };

  responseGoogleFailed(err) {
    console.log(err)
  };

  _renderContent() {
    switch(this.props.user) {
      case(null):
        return;
      case(false):
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
        )
      default: 
        return (
          <div>logout</div>
        )
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to='/budget'/>;
    };
    return (
      <div>
        {this._renderContent()}
      </div>
    );
  };
};

export default connect(({ user }) => ({ user }), actions)(AuthGoogle);