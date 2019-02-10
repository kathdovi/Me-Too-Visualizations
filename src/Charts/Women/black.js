import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class BlackWoman extends Component {
  render() {
    return (
    <PieChart data={[["Experienced Sexual Assault", 29.1], ["Has Not Experienced Sexual Assault", 100-29.1]]}/> 
    )
  }
};

export default (BlackWoman);