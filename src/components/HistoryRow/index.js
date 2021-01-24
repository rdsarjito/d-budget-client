import { Component } from 'react';
import { connect } from 'react-redux';

import { addMoneyDots, sortedDate, stringDate } from '../../helper';
import * as actions from '../../actions';

import '../../style/style.css';

const API = `http://localhost:5000`;

class HistoryRow extends Component {
  constructor() {
    super();
    this.state = {
      transactions: ''
    };
  };

  componentDidMount = async() => {
    const GET = {
      method: 'GET',
    };

    const getTransactions =  await fetch(`${API}/api/transactions`, GET);
    
    const dataTransactions = await getTransactions.json();

    this.setState({ transactions: dataTransactions });
  };

  render() {
    console.log(this.state.transactions)
    // return (
    //   <div>test</div>
    // )
    // const mergeData = [...this.state.income, ...this.state.expense];
    // const sortDate = sortedDate(mergeData);
    return this.state.transactions.map((history) => {
      const date = stringDate(history.date);
      return (
        <div key={history._id} className="history-wrapper">
          <div className="history-date">
            {date}
          </div>
          <div className="history-content">
            <div className="history-description">
              {history.description}
            </div>
            <div className={`history-amount ${history.typeBalance}`}>
              {addMoneyDots(history.amount)}
            </div>
          </div>
        </div>
      );
    });
  };
};

export default connect(({ balances }) => ({ balances }), actions)(HistoryRow);