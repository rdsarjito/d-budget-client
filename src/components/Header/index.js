import React, { useEffect, useCallback, useState, useRef } from 'react';
import { withRouter, Link, useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { Transition } from '@headlessui/react'

import d_logo from '../../images/d-logo.png';
import backArrow from '../../images/back-arrow.png';
import blankUserImage from '../../images/blank-user.png';

import * as actions from '../../actions';
import { capitalizeFirstLetter, getLocalStorage } from '../../helper';
import useOutsideClick from "../../useOutsideClick";
import { LOGOUT_USER } from '../../constants/actionTypes';

import '../../style/style.css';

const Header = (props) => {
  const ref = useRef();

  const [show, setSate] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  useOutsideClick(ref, () => {
    if (show) setSate(false);
  });
  
  useEffect(() => {
    if(!props.getUser) {
      props.getUser();
    }
  }, [props]);

  const _goBack = useCallback(
    () => {
      props.history.goBack();
    },
    [props]
  );

  const _logoutButton = useCallback(
    () => {
      dispatch({ type: LOGOUT_USER });
      history.push('/login')
    },
    [dispatch, history]
  );

  const _renderContent = useCallback(
    () => {
      if(getLocalStorage('profile')[1]){
        return (
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button onClick={() => setSate(!show)} className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" >
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src={getLocalStorage('profile')[1].userData.picture} alt="user" />
            </button>
            <Transition
            show={show}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {show && (
              <div ref={ref} className="rounded-md bg-white shadow-xs mt-8">
                <div className="mt-2 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                  <div onClick={_logoutButton} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Log Out</div>
                </div>
              </div>
              )}
          </Transition>
          </div>
        );
      };
      return (
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div className="ml-3 relative">
            <div>
              <button onClick={() => setSate(!show)} className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" >
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src={blankUserImage} alt="user-blank" />
              </button>
            </div>
          </div>
          <Transition
            show={show}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {() => (
              <div ref={ref} className="rounded-md bg-white shadow-xs mt-8">
                <div className="mt-2 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                  <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign in</Link>
                </div>
              </div>
            )}
          </Transition>
        </div>
      );
    },
    [show, _logoutButton]
  );

  const _conditionHeader = useCallback(
    (path) => {
      if(path === 'dashboard') {
        return (
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img src={d_logo} alt='' className="block md:hidden lg:hidden h-8 w-auto" />
                <img src={d_logo} alt='' className="hidden md:block lg:block h-8 w-auto" />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link to="/dashboard" className={(path === "dashboard") ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Dashboard</Link>
                  <Link to="/income" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Income</Link>
                  <Link to="/expense" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Expense</Link>
                  <Link to="/history" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">History</Link>
                </div>
              </div>
            </div>
            {_renderContent()}
          </div>
        );
      };
  
      return (
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <div onClick={_goBack} className="absolute inset-y-0 left-0 flex items-center">
                <img src={backArrow} alt='' className="md:hidden lg:hidden h-8 w-auto" />
              </div>
              <div className="flex-shrink-0 flex items-center">
                <img src={d_logo} alt='' className="hidden md:block lg:block h-8 w-auto" />
                <img src={d_logo} alt='' className="block md:hidden lg:hidden h-8 w-auto" />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link to="/dashboard" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                  <Link to="/income" className={(path === "income") ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Income</Link>
                  <Link to="/expense" className={(path === "expense") ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Expense</Link>
                  <Link to="/history" className={(path === "history") ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>History</Link>
                </div>
              </div>
            </div>
          </div>
          {_renderContent()}

        </div>
      );    
    }, 
    [_goBack, _renderContent]
  );
  
  const path = props.location.pathname.slice(1);

  return (
    <div>
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {_conditionHeader(path)}
        </div>
      </nav>
      <header className="bg-white border-b">
          <div className="max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              {capitalizeFirstLetter(path)}
            </h1>
          </div>
        </header>
    </div>

  )
};

export default connect(({ user }) => ({ user }), actions)(withRouter(Header));