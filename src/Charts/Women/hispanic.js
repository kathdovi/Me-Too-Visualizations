import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class HispanicWoman extends Component {
  render() {
    return (
         <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> Hispanic Women </div>
    <PieChart data={[["Experienced Sexual Assault", 23.4], ["Has Not Experienced Sexual Assault", 100-23.4]]}/> 
    </div>
    )
  }
};

export default (HispanicWoman);