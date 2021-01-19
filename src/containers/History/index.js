import { Component } from 'react';

import HistoryRow from '../../components/HistoryRow';

import '../../style/style.css';

class History extends Component {
  render() {
    return (
      <div className="history-container">
        <HistoryRow />
      </div>
    )
  }
}

export default History;