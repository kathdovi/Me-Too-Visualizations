import React from "react";
import AnalogClock, { Themes } from "react-analog-clock";
import "./ClockComponent.css";

class Clock extends React.Component {
    render() {

        return (
            <div className="clock-holder">
                <AnalogClock theme={Themes.light}  />
            </div>
        )
    }
};

export default (Clock);