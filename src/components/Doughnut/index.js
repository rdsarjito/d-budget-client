import { Component } from 'react';

import { Doughnut } from 'react-chartjs-2';
class DoughnutChart extends Component {
  _resetCategories () {
    this.props.category.forEach((c) => c.amount = 0);
  };
  render() {
    this._resetCategories();
    const mergeData = [...this.props.income, ...this.props.expense];
    mergeData.forEach((t) => {
      const category = this.props.category.find((c) => c.category === t.category);
      if(category) category.amount += parseInt(t.amount);
    });
    const chartData = {
      datasets: [{
        data: this.props.category.map((c) => c.amount),
        backgroundColor: this.props.category.map((c) => c.color),
      }],
      labels: this.props.category.map((c) => c.category),
    };
    return (
      <div className="doughnut-wrapper">
        <Doughnut 
          data={chartData} 
          width={500} 
          height={250} 
          options={
            { 
              maintainAspectRatio: false, 
              legend: { position: "bottom"} 
            }
          }
        />
      </div>
    );
  };
};

export default DoughnutChart;