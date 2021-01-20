import { Component, useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';


import * as actions from '../../actions';

class Addcategory extends Component {
  render() {
    return (
      <div className="button-add-category">
        <button onClick={() => this.state.setModalIsopen(true)}>
          <img src='http://101.50.0.139:5000/images/add.png' alt='' />
        </button>
        <Modal isOpen={this.state.modalIsOpen}>
          <h2>test</h2>
        </Modal>
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