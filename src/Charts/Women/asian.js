import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class AsianWoman extends Component {
  render() {
    return (
    <PieChart data={[["Experienced Sexual Assault", 15], ["Has Not Experienced Sexual Assault", 100-15]]}/> 
    )
  }
};

export default (AsianWoman);