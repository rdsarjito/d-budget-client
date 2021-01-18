import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import '../../style/style.css';

const API = `http://localhost:5000`;

class HistoryRow extends Component {
  constructor() {
    super();
    this.state = {
      income: [],
      expense: []
    };
  };

  componentDidMount = async() => {
    const GET = {
      method: 'GET',
    };

    const getIncome =  await fetch(`${API}/api/income`, GET);
    const getExpense = await fetch(`${API}/api/expense`, GET);
    const dataIncome = await getIncome.json();
    const dataExpense = await getExpense.json();

    this.setState({ income: dataIncome, expense: dataExpense });
  };

  render() {
    const mergeData = [...this.state.income, ...this.state.expense];

    const sortedDate = mergeData.sort((date1,date2) => {
      const parseDate1 = new Date(date1.date);
      const parseDate2 = new Date(date2.date);
      return parseDate1.getTime() - parseDate2.getTime()
    });

    return sortedDate.map((history) => {
      const getDate = history.date;
      const parseToDate = new Date(getDate);
      const date = parseToDate.toLocaleDateString('en-GB', {
        month: 'long',day: '2-digit',year: 'numeric'});
      return (
        <div key={history._id} className="history-wrapper">
          <div className="history-date">
            {date}
          </div>
          <div className="history-content">
            <div className="history-description">
              {history.description}
            </div>
            <div className="history-amount">
              {history.amount}
            </div>
          </div>
        </div>
      )
    })
  }
}

export default connect(({ balances }) => ({ balances }), actions)(HistoryRow);