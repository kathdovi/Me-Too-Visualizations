import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class BlackMan extends Component {
  render() {
    return (
       <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> Black Men </div>
    <PieChart colors={["#B3E3B5", "#FB9985"]} data={[["Incarcerated", 2.45], ["Not Incarcerated", 100-2.45]]}/> 
    </div>
    )
  }
};

export default (BlackMan);