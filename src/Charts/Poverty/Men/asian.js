import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class AsianMan extends Component {
  render() {
    return (
    <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> Asian Men </div>
    <PieChart colors={["#B3E3B5", "#FB9985"]} data={[["Below 100% Poverty Level", 9.3], ["Not Below 100% Poverty Level", 100-9.3]]}/>
    </div> 
    )
  }
};

export default (AsianMan);