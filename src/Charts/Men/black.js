import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class BlackMan extends Component {
  render() {
    return (
       <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> Black Men </div>
    <PieChart data={[["Experienced Sexual Assault", 12], ["Has Not Experienced Sexual Assault", 100-12]]}/> 
    </div>
    )
  }
};

export default (BlackMan);