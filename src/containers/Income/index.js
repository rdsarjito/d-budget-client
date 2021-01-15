import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './style.css';

const API = `http://localhost:5000`;

class Income extends Component {
  constructor () {
    super();
    this.state = {
      description : '',
      amount: ''
    };
    this._onChangeInputDescription = this._onChangeInputDescription.bind(this);
    this._onChangeIncomeAmount = this._onChangeIncomeAmount.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  };

  _onChangeInputDescription(e) {
    console.log(API)

    this.setState({ description: e.target.value });
  };

  _onChangeIncomeAmount(e) {
    this.setState({ amount: e.target.value })
  };

  _onSubmit = async(e) => {
    e.preventDefault();

    const dataIncome = {
      description: this.state.description,
      amount: this.state.amount
    };
    
    const obj = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ dataIncome })
    };

    await this.props.storeIncome(API, obj);

  };

  render() {
    return (
      <form className="income-wrapper" onSubmit={this._onSubmit}>
        <div className="income-description">
          <input className="income-description-input" placeholder="Masukan Description" onChange={this._onChangeInputDescription} />
        </div>
        <div className="income-amount">
          <div className="income-amount-title">
            Amount
          </div>
          <input className="income-amount-input" onChange={this._onChangeIncomeAmount} />
        </div>
        <button>
          Simpan
        </button>
      </form>
    )
  };
};

const mapDispatchToProps = {
  storeIncome: actions.storeIncome,
}

export default connect(null, mapDispatchToProps)(Income);