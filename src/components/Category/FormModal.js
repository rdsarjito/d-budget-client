import FormContent from './FormContent';

import { Component } from 'react';

class FormModal extends Component {
  render() {
    const formContent = <FormContent hideModalHandler={this.props.hideModalHandler } ></FormContent>;
    const modal = this.props.showModal ? <div>{formContent}</div> : null;
    return (
      <div>
        {modal}
      </div>
    );
  }
}

export default FormModal;