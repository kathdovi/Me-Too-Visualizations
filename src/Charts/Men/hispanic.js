import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class HispanicMan extends Component {
  render() {
    return (
    <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> Hispanic Men </div>
    <PieChart data={[["Experienced Sexual Assault", 7.4], ["Has Not Experienced Sexual Assault", 100-7.4]]}/>
    </div> 
    )
  }
};

export default (HispanicMan);