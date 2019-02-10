import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class WhiteWoman extends Component {
  render() {
    return (
    <PieChart data={[["Experienced Sexual Assault", 24.8], ["Has Not Experienced Sexual Assault", 100-24.8]]}/> 
    )
  }
};

export default (WhiteWoman);