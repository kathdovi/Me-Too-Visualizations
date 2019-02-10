import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class WhiteWoman extends Component {
  render() {
    return (
         <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> White Women </div>
    <PieChart data={[["Experienced Sexual Assault", 24.8], ["Has Not Experienced Sexual Assault", 100-24.8]]}/> 
    </div>
    )
  }
};

export default (WhiteWoman);