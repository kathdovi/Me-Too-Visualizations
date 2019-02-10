import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class BlackWoman extends Component {
  render() {
    return (
         <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> Black Women  </div>
    <PieChart colors={["#B3E3B5", "#FB9985"]} data={[["Incarcerated", .11], ["Not Incarcerated", 100-.11]]}/>
    </div> 
    )
  }
};

export default (BlackWoman);