import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class HispanicMan extends Component {
  render() {
    return (
    <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> Hispanic Men </div>
    <PieChart colors={["#B3E3B5", "#FB9985"]} data={[["Below 100% Poverty Level", 16.1], ["Not Below 100% Poverty Level", 100-16.1]]}/>
    </div> 
    )
  }
};

export default (HispanicMan);