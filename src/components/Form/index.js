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

    await this.props.getIncome(API, GET);
    
    this.setState({
      description: '',
      amount: ''
    });
  };

  render() {
    return (
      <form className="income-wrapper" onSubmit={this._onSubmit}>
        <div className="income-description">
          <input className="income-description-input" placeholder="Masukan Description" onChange={this._onChangeInputDescription} value={this.state.description} autoFocus  />
        </div>
        <div className="income-amount">
          <div className="income-amount-title">
            Amount
          </div>
          <input className="income-amount-input" onChange={this._onChangeIncomeAmount} placeholder='Masukan Amount' value={this.state.amount} />
        </div>
        <button className="btn-simpan">
          Simpan
        </button>
      </form>
    )
  };
};

function mapStateToProps({ incomes }) {
  return { incomes }
};

const mapDispatchToProps = {
  add: actions.add,
  getIncome: actions.getIncome
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);