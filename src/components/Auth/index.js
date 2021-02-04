import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../actions';

class Auth extends Component {
  _renderContent() {
    switch(this.props.auth) {
      case null:
        return;
      case true:
        return <h1>test</h1>
      default:
        return (
          <Link to="/login">
            <img src="http://101.50.0.139:5050/images/blank-user.png" alt="user-blank" />
          </Link>
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

export default connect(({ auth }) => ({ auth }), actions)(Auth);