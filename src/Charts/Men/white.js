import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class WhiteMan extends Component {
  render() {
    return (
    <PieChart data={[["Experienced Sexual Assault", 7.5], ["Has Not Experienced Sexual Assault", 100-7.5]]}/> 
    )
  }
};

export default (WhiteMan);