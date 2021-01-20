import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import FormModal from './FormModal';

class Addcategory extends Component {
  constructor() {
    super()
    this.state = {
      showModal : false
    }
  }

  showModalHandler = (event) =>{
    this.setState({showModal:true});
  }

  hideModalHandler = (event) =>{
    this.setState({showModal:false});
  }

  render() {
    return (
      <div className="button-add-category">
        <a type="button" onClick={this.showModalHandler}>
          <img src='http://101.50.0.139:5000/images/add.png' alt='' />
        </a>
        <FormModal showModal={this.state.showModal} hideModalHandler={this.hideModalHandler}></FormModal>
      </div>
    );
  };
};

function mapStateToProps({ balances }) {
  return { balances }
};

const mapDispatchToProps = {
  add: actions.add,
  get: actions.get
};

export default connect(mapStateToProps, mapDispatchToProps)(Addcategory);