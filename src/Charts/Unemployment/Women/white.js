import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class WhiteWoman extends Component {
  render() {
    return (
         <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> White Women </div>
    <PieChart colors={["#B3E3B5", "#FB9985"]} data={[["Experienced Unemployment", 3.1], ["Did Not Experience Unemployment", 100-3.1]]}/> 
    </div>
    )
  }
};

export default (WhiteWoman);