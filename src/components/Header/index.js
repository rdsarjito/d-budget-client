import React, { useEffect, useCallback } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import backArrow from '../../images/back-arrow.png';
import blankUserImage from '../../images/blank-user.png';

import * as actions from '../../actions';
import { capitalizeFirstLetter, getLocalStorage } from '../../helper';

import '../../style/style.css';


const Header = (props) => {
  useEffect(() => {
    if(!props.getUser) {
      props.getUser();
    }
    console.log('mount it!');
  }, [props]);

  const _goBack = useCallback(
    () => {
      props.history.goBack();
    },
    [props]
  );

  const _renderContent = useCallback(
    () => {
      if(getLocalStorage('profile')[1]){
        return (
          <Link to="/login" className="picture-profile">
            <img src={getLocalStorage('profile')[1].userData.picture} alt="user" />
          </Link>
        );
      };
      return (
        <Link to="/login" className="picture-profile">
          <img src={blankUserImage} alt="user-blank" />
        </Link>
      );
    },
    []
  );

  const _conditionHeader = useCallback(
    (path) => {
      if(path === 'budget') {
        return (
          <div className="wrapper-header">
            <div className="back-button"></div>
            <div className="header-title white">D-Budget</div>
            {_renderContent()}
          </div>
        );
      };
  
      return (
        <div className="wrapper-header">
          <div onClick={_goBack} className="back-button">
            <img src={backArrow} alt='' />
          </div>
          <div className="header-title white">
            {capitalizeFirstLetter(path)}
          </div>
          {_renderContent()}
        </div>
      );    
    }, 
    [_goBack, _renderContent]
  );
  
  const path = props.location.pathname.slice(1);
  return _conditionHeader(path);
};

export default connect(({ user }) => ({ user }), actions)(withRouter(Header));