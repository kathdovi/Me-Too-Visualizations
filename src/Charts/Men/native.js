import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class NativeMan extends Component {
  render() {
    return (
       <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> Native American Men </div>
    <PieChart colors={["#B3E3B5", "#FB9985"]} data={[["Experienced Sexual Assault", 12.4], ["Has Not Experienced Sexual Assault", 100-12.4]]}/> 
    </div>
    )
  }
};

export default (NativeMan);