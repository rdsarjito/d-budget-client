import { Component } from 'react';

import DoughnutChart from '../../components/DoughnutChart';
import '../../style/style.css';

class Report extends Component {
  render() {
    return (
      <main>
        <DoughnutChart />
      </main>
    )
  }
}

export default Report;