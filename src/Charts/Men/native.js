import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class NativeMan extends Component {
  render() {
    return (
    <PieChart data={[["Experienced Sexual Assault", 12.4], ["Has Not Experienced Sexual Assault", 100-12.4]]}/> 
    )
  }
};

export default (NativeMan);