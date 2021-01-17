import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import '../../style/style.css';

const API = `http://localhost:5000`;

class Form extends Component {
  constructor () {
    super();
    this.state = {
      description : '',
      amount: '',
      format: ''
    };
    this._onChangeInputDescription = this._onChangeInputDescription.bind(this);
    this._onChangeIncomeAmount = this._onChangeIncomeAmount.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  };

  componentDidMount() {
    const getPathName = window.location.pathname;
    const format = getPathName.replace("/", "");
    this.setState({ format });
  }

  _onChangeInputDescription(e) {
    this.setState({ description: e.target.value });
  };

  _onChangeIncomeAmount(e) {
    this.setState({ amount: e.target.value })
  };

  _onSubmit = async(e) => {
    e.preventDefault();

    const data = {
      description: this.state.description,
      amount: this.state.amount
    };

    const format = this.state.format;
    
    const POST = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data })
    };

    const GET = {
      method: 'GET',
    };

    await this.props.add(API, format, POST);
    await this.props.get(API, format, GET);
    
    this.setState({
      description: '',
      amount: ''
    });
  };

  render() {
    return (
      <form className="form-wrapper" onSubmit={this._onSubmit}>
        <div className="form-description">
          <input className="form-description-input" placeholder="Masukan Description" onChange={this._onChangeInputDescription} value={this.state.description} autoFocus  />
        </div>
        <div className="form-amount">
          <div className="form-amount-title">
            Amount
          </div>
          <input className="form-amount-input" onChange={this._onChangeIncomeAmount} placeholder='Masukan Amount' value={this.state.amount} />
        </div>
        <button className="form-btn-simpan">
          Simpan
        </button>
      </form>
    )
  };
};

function mapStateToProps({ balances }) {
  return { balances }
};

const mapDispatchToProps = {
  add: actions.add,
  get: actions.get
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);