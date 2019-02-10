import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class BlackWoman extends Component {
  render() {
    return (
         <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> Black Women  </div>
    <PieChart colors={["#B3E3B5", "#FB9985"]} data={[["Below 100% Poverty Level", 22.9], ["Not Below 100% Poverty Level", 100-22.9]]}/>
    </div> 
    )
  }
};

export default (BlackWoman);