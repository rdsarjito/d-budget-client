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
    
    this.props.get(API, GET);
  };

  render() {
    const sortDate = sortedDate(this.props.balances);
    return sortDate.map((history) => {
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
            <div className={`history-amount ${history.type}`}>
              {addMoneyDots(history.amount)}
            </div>
          </div>
        </div>
      );
    });
  };
};

export default connect(({ balances }) => ({ balances }), actions)(HistoryRow);