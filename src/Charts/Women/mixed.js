import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class MixedWoman extends Component {
  render() {
    return (
    <PieChart data={[["Experienced Sexual Assault", 30.2], ["Has Not Experienced Sexual Assault", 100-30.2]]}/> 
    )
  }
};

export default (MixedWoman);