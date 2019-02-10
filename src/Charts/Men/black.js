import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class BlackMan extends Component {
  render() {
    return (
    <PieChart data={[["Experienced Sexual Assault", 12], ["Has Not Experienced Sexual Assault", 100-12]]}/> 
    )
  }
};

export default (BlackMan);