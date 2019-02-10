import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class WhiteWoman extends Component {
  render() {
    return (
         <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> White Women </div>
    <PieChart colors={["#B3E3B5", "#FB9985"]} data={[["Incarcerated", .05], ["Not Incarcerated", 100-.05]]}/> 
    </div>
    )
  }
};

export default (WhiteWoman);