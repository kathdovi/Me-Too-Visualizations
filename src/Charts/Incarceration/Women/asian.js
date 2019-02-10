import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class AsianWoman extends Component {
  render() {
    return (
       <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> Asian Women </div>
    <PieChart colors={["#B3E3B5", "#FB9985"]} data={[["Incarcerated", .01], ["Not Incarcerated", 100-.01]]}/> 
    </div>
    )
  }
};

export default (AsianWoman);