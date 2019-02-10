import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class HispanicMan extends Component {
  render() {
    return (
    <PieChart data={[["Experienced Sexual Assault", 7.4], ["Has Not Experienced Sexual Assault", 100-7.4]]}/> 
    )
  }
};

export default (HispanicMan);