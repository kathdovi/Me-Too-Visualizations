import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class MixedMan extends Component {
  render() {
    return (
       <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> Mixed Race Men </div>
    <PieChart data={[["Experienced Sexual Assault", 9], ["Has Not Experienced Sexual Assault", 100-9]]}/> 
    </div>
    )
  }
};

export default (MixedMan);