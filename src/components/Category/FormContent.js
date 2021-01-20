import { Component } from 'react';


class FormContent extends Component {
  render() {
    return (
      <form className="form-content" onSubmit={this._onSubmit}>
        <input type="category" className="form-category-input" placeholder="Masukan Category" />
        <button onClick={this.props.hideModalHandler}>
          Simpan
        </button>
      </form>
    );
  }
}

export default FormContent;