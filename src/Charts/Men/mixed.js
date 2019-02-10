import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class MixedMan extends Component {
  render() {
    return (
    <PieChart data={[["Experienced Sexual Assault", 9], ["Has Not Experienced Sexual Assault", 100-9]]}/> 
    )
  }
};

export default (MixedMan);