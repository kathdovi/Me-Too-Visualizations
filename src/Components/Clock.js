import React from "react";
import "./Clock.css";

class Clock extends React.Component {
    render() {

        return(
            <div class="clock">
                <div class="hours-container">
                    <div class="hours"></div>
                </div>
                <div class="minutes-container">
                    <div class="minutes"></div>
                </div>
                <div class="seconds-container">
                    <div class="seconds"></div>
                </div>
            </div>
        )
    };
}

export default (Clock);