import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class AsianWoman extends Component {
  render() {
    return (
    <PieChart data={[["Blueberry", 44], ["Strawberry", 23]]}/> 
    )
  }
};

export default (AsianWoman);
