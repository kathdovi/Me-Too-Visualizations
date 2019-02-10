import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class AsianMan extends Component {
  render() {
    return (
    
    <PieChart data={[["Experienced Sexual Assault", 3], ["Has Not Experienced Sexual Assault", 100-3]]}/> 
    )
  }
};

export default (AsianMan);