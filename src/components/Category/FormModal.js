import FormContent from './FormContent';

import { Component } from 'react';

class FormModal extends Component {
  render() {
    const formContent = <FormContent hideModalHandler={this.props.hideModalHandler } ></FormContent>;
    const modal = this.props.showModal ? <div className="test">{formContent}</div> : null;
    return (
      <div className="absolute">
        {modal}
      </div>
    );
  }
}

export default FormModal;