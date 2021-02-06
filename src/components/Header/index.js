import { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import backArrow from '../../images/back-arrow.png';

import * as actions from '../../actions';
import { capitalizeFirstLetter, getLocalStorage } from '../../helper';
import blankUserImage from '../../images/blank-user.png';

import '../../style/style.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  };

  componentDidMount() {
    this.props.getUser();
  };
  
  _renderContent() {
    if(getLocalStorage('profile')[1]){
      return (
        <Link to="/login" className="picture-profile">
          <img src={getLocalStorage('profile')[1].existingUser.picture} alt="user" />
        </Link>
      );
    };
    return (
      <Link to="/login" className="picture-profile">
        <img src={blankUserImage} alt="user-blank" />
      </Link>
    );
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
          <img src={backArrow} alt='' />
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