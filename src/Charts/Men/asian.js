import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class AsianMan extends Component {
  render() {
    return (
    <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> Asian Men </div>
    <PieChart data={[["Experienced Sexual Assault", 3], ["Has Not Experienced Sexual Assault", 100-3]]}/>
    </div> 
    )
  }
};

export default (AsianMan);