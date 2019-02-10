import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class HispanicWoman extends Component {
  render() {
    return (
         <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> Hispanic Women </div>
    <PieChart colors={["#B3E3B5", "#FB9985"]} data={[["Incarcerated", .31], ["Not Incarcerated", 100-.31]]}/> 
    </div>
    )
  }
};

export default (HispanicWoman);