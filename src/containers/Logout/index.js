import { Component } from 'react';

import Auth from '../../components/Auth/AuthGoogle';

const API = `http://localhost:5000`;

class Logout extends Component {
  render() {
    return (
      <Auth API={API} />
    );
  };
};

export default Logout;