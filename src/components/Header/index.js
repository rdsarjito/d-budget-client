import { Component } from 'react';

import './style.css';

class Header extends Component {

  componentDidMount() {
    const gambar = fetch('http://101.50.0.139:5000/images/left-arrow.png')
    .then(res => res.status)

    console.log(gambar)
  }

  render() {
    return (
      <div className="wrapper-header">
        <div className="back-button">
          <img src='http://101.50.0.139:5000/images/left-arrow.png' />
        </div>
        <div className="title">
          D-Budget
        </div>
      </div>
    )
  };
};

export default Header;