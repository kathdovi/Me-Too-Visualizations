import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class HispanicWoman extends Component {
  render() {
    return (
         <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> Hispanic Women </div>
    <PieChart colors={["#B3E3B5", "#FB9985"]} data={[["Experienced Unemployment", 4.6], ["Did Not Experience Unemployment", 100-4.6]]}/> 
    </div>
    )
  }
};

export default (HispanicWoman);