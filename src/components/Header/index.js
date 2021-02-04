import { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import { capitalizeFirstLetter } from '../../helper';

import '../../style/style.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  };

  componentDidMount() {
    this.props.getUser()
  }
  
  _renderContent() {
    switch(this.props.user) {
      case null:
        return;
      case false:
        return (
          <Link to="/login" className="picture-profile">
            <img src="http://101.50.0.139:5050/images/blank-user.png" alt="user-blank" />
          </Link>
        );
      default:
        return (
          <Link to="/login" className="picture-profile">
            <img src={this.props.user.existingUser.picture} alt="user" />
          </Link>
        );
    };
  };

  goBack(){
    this.props.history.goBack();
  };

  _conditionHeader(path) {
    if(path === 'budget') {
      return (
        <div className="wrapper-header">
          <div className="back-button"></div>
          <div className="header-title white">D-Budget</div>
          {this._renderContent()}
        </div>
      );
    };
    return (
      <div className="wrapper-header">
        <div onClick={this.goBack} className="back-button">
          <img src='http://localhost:5000/images/left-arrow.png' alt='' />
        </div>
        <div className="header-title white">
          {capitalizeFirstLetter(path)}
        </div>
        {this._renderContent()}
      </div>
    );
  };
  
  render() {
    const path = this.props.location.pathname.slice(1);
    return this._conditionHeader(path);
  };
};

export default connect(({ user }) => ({ user }), actions)(withRouter(Header));