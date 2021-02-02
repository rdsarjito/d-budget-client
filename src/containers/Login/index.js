import { Component } from 'react';

import Auth from '../../components/Auth/AuthGoogle';

const API = `http://localhost:5000`;

class Login extends Component {
  render() {
    return (
      <Auth API={API} />
    );
  };
};

export default Login;