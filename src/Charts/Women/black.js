import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class BlackWoman extends Component {
  render() {
    return (
         <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> Black Women  </div>
    <PieChart data={[["Experienced Sexual Assault", 29.1], ["Has Not Experienced Sexual Assault", 100-29.1]]}/>
    </div> 
    )
  }
};

export default (BlackWoman);