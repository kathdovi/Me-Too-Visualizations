import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class NativeWoman extends Component {
  render() {
    return (
    <PieChart data={[["Experienced Sexual Assault", 23.4], ["Has Not Experienced Sexual Assault", 100-23.4]]}/> 
    )
  }
};

export default (NativeWoman);