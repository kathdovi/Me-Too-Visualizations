import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FemaleAsian from "./Charts/Incarceration/Women/asian";
import FemaleHispanic from "./Charts/Incarceration/Women/hispanic";
import FemaleWhite from "./Charts/Incarceration/Women/white";
import FemaleBlack from "./Charts/Incarceration/Women/black";
import MaleAsian from "./Charts/Incarceration/Men/asian";
import MaleHispanic from "./Charts/Incarceration/Men/hispanic";
import MaleWhite from "./Charts/Incarceration/Men/white";
import MaleBlack from "./Charts/Incarceration/Men/black";
import "./data.css";

class Incarceration extends Component {

    constructor(){
      super();
        this.state = {
         buttonId: null,
         buttonID2: null,
         currentA: null,
         currentB: null
        }
        this.setButton = this.setButton.bind(this);
      }

      setButton(id, pct){
        this.setState({buttonId: id});
        this.setState({currentA: pct})
      }
      setButton2(id, pct){
        this.setState({buttonId2: id});
        this.setState({currentB: pct})
      }

      calculateDifference() {
        if (this.state.currentA === null || this.state.currentB === null) {
          return null
        } else if (this.state.currentA > this.state.currentB) {
          return <div style={{textAlign: "center"}}> Group A experiences Incarceration at a {(this.state.currentA - this.state.currentB).toFixed(1)}% higher rate than group B. </div>
        } else if (this.state.currentA < this.state.currentB) {
          return <div style={{textAlign: "center"}}> Group B experiences Incarceration at a {(this.state.currentB - this.state.currentA).toFixed(1)}% higher rate than group A. </div>
        } else {
          return <div style={{textAlign: "center"}}> These groups experience Incarceration at the same rate. </div>
        }
      }

  render() {
      return( 
        <div>
            <h2 style={{textAlign: "center", padding: "10px"}}> Incarceration Statistics </h2>
        <Row>
          <Col style={{textAlign: "right"}}>  
            <input className={this.state.buttonId === 1? "button1" : 
              "button1"} onClick={() => this.setButton(1, .01)} value="Asian Women" 
               type="button" ref="button" />
            <input className={this.state.buttonId === 2? "button2" : 
            "button2"} onClick={() => this.setButton(2, .05)}  value="White Women" 
             ref="button1" type="button" />
             <input className={this.state.buttonId === 3? "button3" : 
              "button3"} onClick={() => this.setButton(3, .31)} value="Hispanic Women" 
               type="button" ref="button" />
            <input className={this.state.buttonId === 4? "button4" : 
            "button4"} onClick={() => this.setButton(4, .11)}  value="Black Women" 
             ref="button1" type="button" />
             <input className={this.state.buttonId === 5? "button5" : 
              "button5"} onClick={() => this.setButton(5, .09)} value="Asian Men" 
               type="button" ref="button" />
            <input className={this.state.buttonId === 6? "button6" : 
            "button6"} onClick={() => this.setButton(6, .40)}  value="White Men" 
             ref="button1" type="button" />
            <input className={this.state.buttonId === 7? "button7" : 
              "button7"} onClick={() => this.setButton(7, .73)} value="Hispanic Men" 
               type="button" ref="button" />
            <input className={this.state.buttonId === 8? "button8" : 
            "button8"} onClick={() => this.setButton(8, 2.45)}  value="Black Men" 
             ref="button1" type="button" />
          </Col>
          <Col style={{textAlign: "left"}}>
           <input className={this.state.buttonId2 === 1? "button1" : 
              "button1"} onClick={() => this.setButton2(1, .01)} value="Asian Women" 
               type="button" ref="button" />
            <input className={this.state.buttonId2 === 2? "button2" : 
            "button2"} onClick={() => this.setButton2(2, .05)}  value="White Women" 
             ref="button1" type="button" />
             <input className={this.state.buttonId2 === 3? "button3" : 
              "button3"} onClick={() => this.setButton2(3, .31)} value="Hispanic Women" 
               type="button" ref="button" />
            <input className={this.state.buttonId2 === 4? "button4" : 
            "button4"} onClick={() => this.setButton2(4, .11)}  value="Black Women" 
             ref="button1" type="button" />
             <input className={this.state.buttonId2 === 5? "button5" : 
              "button5"} onClick={() => this.setButton2(5, .09)} value="Asian Men" 
               type="button" ref="button" />
            <input className={this.state.buttonId2 === 6? "button6" : 
            "button6"} onClick={() => this.setButton2(6, .40)}  value="White Men" 
             ref="button1" type="button" />
            <input className={this.state.buttonId2 === 7? "button7" : 
              "button7"} onClick={() => this.setButton2(7, .73)} value="Hispanic Men" 
               type="button" ref="button" />
            <input className={this.state.buttonId2 === 8? "button8" : 
            "button8"} onClick={() => this.setButton2(8, 2.45)}  value="Black Men" 
             ref="button1" type="button" />
          </Col>
        </Row>
        <Row>
          <Col xs={6}> 
             <div>
             {this.state.buttonId === 1 && <FemaleAsian/>}
             {this.state.buttonId === 2 && <FemaleWhite/>}
             {this.state.buttonId === 3 && <FemaleHispanic/>}
             {this.state.buttonId === 4 && <FemaleBlack/>}
             {this.state.buttonId === 5 && <MaleAsian/>}
             {this.state.buttonId === 6 && <MaleWhite/>}
             {this.state.buttonId === 7 && <MaleHispanic/>}
             {this.state.buttonId === 8 && <MaleBlack/>}
             {this.state.buttonId !== 1  && this.state.buttonId !== 2 && this.state.buttonId !== 3  && this.state.buttonId !== 4 && this.state.buttonId !== 5  && this.state.buttonId !== 6 && this.state.buttonId !== 7  && this.state.buttonId !== 8 && <div style={{textAlign: "center"}}> Select a category </div>}
             </div>
          </Col>
          <Col xs={6}> 
            <div>
             {this.state.buttonId2 === 1 && <FemaleAsian/>}
             {this.state.buttonId2 === 2 && <FemaleWhite/>}
             {this.state.buttonId2 === 3 && <FemaleHispanic/>}
             {this.state.buttonId2 === 4 && <FemaleBlack/>}
             {this.state.buttonId2 === 5 && <MaleAsian/>}
             {this.state.buttonId2 === 6 && <MaleWhite/>}
             {this.state.buttonId2 === 7 && <MaleHispanic/>}
             {this.state.buttonId2 === 8 && <MaleBlack/>}
             {this.state.buttonId2 !== 1  && this.state.buttonId2 !== 2 && this.state.buttonId2 !== 3  && this.state.buttonId2 !== 4 && this.state.buttonId2 !== 5  && this.state.buttonId2 !== 6 && this.state.buttonId2 !== 7  && this.state.buttonId2 !== 8  && <div style={{textAlign: "center"}}> Select a category </div>}
             </div>
          </Col>
        </Row>
        <Row>
          <Col className="calc"> {this.calculateDifference()} </Col>
        </Row>
        </div>
      );
  };
}

export default (Incarceration);