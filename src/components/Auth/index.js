import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../actions';

class Auth extends Component {
  componentDidMount() {
    this.props.getUser()
  };
  
  _renderContent() {
    switch(this.props.user) {
      case null:
        return;
      case false:
        return (
          <Link to="/login">
            <img src="http://101.50.0.139:5050/images/blank-user.png" alt="user-blank" />
          </Link>
        )
      default:
        return (
          <img src={this.props.user.existingUser.picture} alt="user" />
        );
    };
  };
  
  render() {
    return (
      <div className="render-content-header">
        <div className="nav-user">
          {this._renderContent()}
        </div>
      </div>
    );
  };
};

export default connect(({ auth, user }) => ({ auth, user }), actions)(Auth);