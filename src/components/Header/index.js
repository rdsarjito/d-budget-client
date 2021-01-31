import { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { capitalizeFirstLetter } from '../../helper';

import '../../style/style.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this); // i think you are missing this
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
        </div>
      );
    };
    return (
      <div className="wrapper-header">
        <div onClick={this.goBack} className="back-button">
          <img src='http://localhost:5000/images/left-arrow.png' alt='' />
        </div>
        <div className="header-title white">
          { capitalizeFirstLetter(path)}
        </div>
      </div>
    );
  };
  
  render() {
    const path = this.props.location.pathname.slice(1);
    return this._conditionHeader(path);
  };
};

export default withRouter(Header);