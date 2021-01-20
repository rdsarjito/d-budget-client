import { Component } from 'react';


class FormContent extends Component {
  render() {
    return (
      <form className="form-wrapper" onSubmit={this._onSubmit}>
        <input type="description" className="form-description-input" placeholder="Masukan Description" />
        <a className="form-btn-simpan" onClick={this.props.hideModalHandler}>
          Simpan
        </a>
      </form>
    );
  }
}

export default FormContent;