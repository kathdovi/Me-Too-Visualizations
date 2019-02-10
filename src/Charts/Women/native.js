import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class NativeWoman extends Component {
  render() {
    return (
       <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> Native American Women </div>
    <PieChart colors={["#B3E3B5", "#FB9985"]} data={[["Experienced Sexual Assault", 23.4], ["Has Not Experienced Sexual Assault", 100-23.4]]}/> 
    </div>
    )
  }
};

export default (NativeWoman);