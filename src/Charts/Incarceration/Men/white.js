import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class WhiteMan extends Component {
  render() {
    return (
       <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> White Men </div>
    <PieChart colors={["#B3E3B5", "#FB9985"]} data={[["Incarcerated", .4], ["Not Incarcerated", 100-.4]]}/> 
    </div>
    )
  }
};

export default (WhiteMan);