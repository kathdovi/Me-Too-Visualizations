import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./data.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

class About extends Component {

  render() {
      return( 
        <div>
            <h2 style={{textAlign: "center", padding: "10px"}}> welcome to intersectionalisee </h2>
            <p> intersectionalisee is an application that was developed to help you visualize the relationship between gender and race in a number of categories. Issues such as sexual assault, poverty, unemployment and incarceration affect different groups with different rates – this is no coincidence. Understanding how different groups are affected in their daily lives by their identity can help us to emphasize with each other a little bit more, something that is far too often forgotten about in our current society.</p>
            <p> To use intersectionalisee, click on some of the topics above. You will be able to see pie graphs representing how the topic you chose affects different demographics. If you choose two demographics to compare, the difference of rate in which the two chosen populations will be calculated for you. </p>
            <p> In the future, we'd like to expand and include even more topics and even more demographics. Finding statistics that cover intersections in identities is tricky; please understand that if a certain identity intersection or topic was not covered, this was likely the reason why.</p>
            <p> For more information about this project, please contact Kathleen Doviken, developer, via the mediums below. </p>
             <a style={{ color: "white" }} href="https://www.linkedin.com/in/kathleen-doviken/">
                <FontAwesomeIcon style={{ marginRight: "20px", color: "black", fontSize: "30px"}} icon={["fab", "linkedin"]}/>
            </a>
            <a style={{ color: "white" }} href="https://github.com/kathdovi">
                <FontAwesomeIcon icon={["fab", "github"]} style={{ color: "black" , fontSize: "30px"}}/>
            </a>
        </div>
      );
  };
}

export default (About);