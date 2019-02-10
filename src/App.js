import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FemaleAsian from "./Charts/Women/asian";
import FemaleHispanic from "./Charts/Women/hispanic";
import FemaleWhite from "./Charts/Women/white";
import FemaleMixed from "./Charts/Women/mixed";
import FemaleBlack from "./Charts/Women/black";
import FemaleNative from "./Charts/Women/native";
import MaleAsian from "./Charts/Men/asian";
import MaleHispanic from "./Charts/Men/hispanic";
import MaleWhite from "./Charts/Men/white";
import MaleMixed from "./Charts/Men/mixed";
import MaleBlack from "./Charts/Men/black";
import MaleNative from "./Charts/Men/native";


class App extends Component {
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
          return <div style={{textAlign: "center"}}> Group A experiences sexual assault at a {(this.state.currentA - this.state.currentB).toFixed(1)}% higher rate than group B. </div>
        } else if (this.state.currentA < this.state.currentB) {
          return <div style={{textAlign: "center"}}> Group B experiences sexual assault at a {(this.state.currentB - this.state.currentA).toFixed(1)}% higher rate than group A. </div>
        } else {
          return <div style={{textAlign: "center"}}> These groups experience sexual assault at the same rate. </div>
        }
      }

  render() {
    return (
      <Container>
         <Row>
          <Col> 
            <h1 style={{textAlign: "center", margin: "20px"}}> Intersectionality Analysis </h1> 
          </Col>
        </Row>
        <Row>
          <Col >  
            <input className={this.state.buttonId === 1? "button1" : 
              "button1"} onClick={() => this.setButton(1, 15)} value="Asian Women" 
               type="button" ref="button" />
            <input className={this.state.buttonId === 2? "button2" : 
            "button2"} onClick={() => this.setButton(2, 24.8)}  value="White Women" 
             ref="button1" type="button" />
             <input className={this.state.buttonId === 3? "button3" : 
              "button3"} onClick={() => this.setButton(3, 23.4)} value="Hispanic Women" 
               type="button" ref="button" />
            <input className={this.state.buttonId === 4? "button4" : 
            "button4"} onClick={() => this.setButton(4, 29.1)}  value="Black Women" 
             ref="button1" type="button" />
             <input className={this.state.buttonId === 5? "button5" : 
              "button5"} onClick={() => this.setButton(5, 23.4)} value="Native American Women" 
               type="button" ref="button" />
            <input className={this.state.buttonId === 6? "button6" : 
            "button6"} onClick={() => this.setButton(6, 30.2)}  value="Mixed Race Women" 
             ref="button1" type="button" />
            <input className={this.state.buttonId === 7? "button7" : 
              "button7"} onClick={() => this.setButton(7, 3)} value="Asian Men" 
               type="button" ref="button" />
            <input className={this.state.buttonId === 8? "button8" : 
            "button8"} onClick={() => this.setButton(8, 7.5)}  value="White Men" 
             ref="button1" type="button" />
             <input className={this.state.buttonId === 9? "button9" : 
              "button9"} onClick={() => this.setButton(9, 7.4)} value="Hispanic Men" 
               type="button" ref="button" />
            <input className={this.state.buttonId === 10? "button10" : 
            "button10"} onClick={() => this.setButton(10, 12)}  value="Black Men" 
             ref="button1" type="button" />
             <input className={this.state.buttonId === 11? "button11" : 
              "button11"} onClick={() => this.setButton(11, 12.4)} value="Native American Men" 
               type="button" ref="button" />
            <input className={this.state.buttonId === 12? "button12" : 
            "button12"} onClick={() => this.setButton(12, 9)}  value="Mixed Race Men" 
             ref="button1" type="button" />
          </Col>
          <Col >
           <input className={this.state.buttonId2 === 1? "button1" : 
              "button1"} onClick={() => this.setButton2(1, 15)} value="Asian Women" 
               type="button" ref="button" />
            <input className={this.state.buttonId2 === 2? "button2" : 
            "button2"} onClick={() => this.setButton2(2, 24.8)}  value="White Women" 
             ref="button1" type="button" />
             <input className={this.state.buttonId2 === 3? "button3" : 
              "button3"} onClick={() => this.setButton2(3, 23.4)} value="Hispanic Women" 
               type="button" ref="button" />
            <input className={this.state.buttonId2 === 4? "button4" : 
            "button4"} onClick={() => this.setButton2(4, 29.1)}  value="Black Women" 
             ref="button1" type="button" />
             <input className={this.state.buttonId2 === 5? "button5" : 
              "button5"} onClick={() => this.setButton2(5, 23.4)} value="Native American Women" 
               type="button" ref="button" />
            <input className={this.state.buttonId2 === 6? "button6" : 
            "button6"} onClick={() => this.setButton2(6, 30.2)}  value="Mixed Race Women" 
             ref="button1" type="button" />
            <input className={this.state.buttonId2 === 7? "button7" : 
              "button7"} onClick={() => this.setButton2(7, 15)} value="Asian Men" 
               type="button" ref="button" />
            <input className={this.state.buttonId2 === 8? "button8" : 
            "button8"} onClick={() => this.setButton2(8, 7.5)}  value="White Men" 
             ref="button1" type="button" />
             <input className={this.state.buttonId2 === 9? "button9" : 
              "button9"} onClick={() => this.setButton2(9, 7.4)} value="Hispanic Men" 
               type="button" ref="button" />
            <input className={this.state.buttonId2 === 10? "button10" : 
            "button10"} onClick={() => this.setButton2(10, 12)}  value="Black Men" 
             ref="button1" type="button" />
             <input className={this.state.buttonId2 === 11? "button11" : 
              "button11"} onClick={() => this.setButton2(11, 12.4)} value="Native American Men" 
               type="button" ref="button" />
            <input className={this.state.buttonId2 === 12? "button12" : 
            "button12"} onClick={() => this.setButton2(12, 9)}  value="Mixed Race Men" 
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
             {this.state.buttonId === 5 && <FemaleNative/>}
             {this.state.buttonId === 6 && <FemaleMixed/>}
             {this.state.buttonId === 7 && <MaleAsian/>}
             {this.state.buttonId === 8 && <MaleWhite/>}
             {this.state.buttonId === 9 && <MaleHispanic/>}
             {this.state.buttonId === 10 && <MaleBlack/>}
             {this.state.buttonId === 11 && <MaleNative/>}
             {this.state.buttonId === 12 && <MaleMixed/>}
             {this.state.buttonId !== 1  && this.state.buttonId !== 2 && this.state.buttonId !== 3  && this.state.buttonId !== 4 && this.state.buttonId !== 5  && this.state.buttonId !== 6 && this.state.buttonId !== 7  && this.state.buttonId !== 8 && this.state.buttonId !== 9  && this.state.buttonId !== 10 && this.state.buttonId !== 11  && this.state.buttonId !== 12 && <div style={{textAlign: "center"}}> Select a category </div>}
             </div>
          </Col>
          <Col xs={6}> 
            <div>
             {this.state.buttonId2 === 1 && <FemaleAsian/>}
             {this.state.buttonId2 === 2 && <FemaleWhite/>}
             {this.state.buttonId2 === 3 && <FemaleHispanic/>}
             {this.state.buttonId2 === 4 && <FemaleBlack/>}
             {this.state.buttonId2 === 5 && <FemaleNative/>}
             {this.state.buttonId2 === 6 && <FemaleMixed/>}
             {this.state.buttonId2 === 7 && <MaleAsian/>}
             {this.state.buttonId2 === 8 && <MaleWhite/>}
             {this.state.buttonId2 === 9 && <MaleHispanic/>}
             {this.state.buttonId2 === 10 && <MaleBlack/>}
             {this.state.buttonId2 === 11 && <MaleNative/>}
             {this.state.buttonId2 === 12 && <MaleMixed/>}
             {this.state.buttonId2 !== 1  && this.state.buttonId2 !== 2 && this.state.buttonId2 !== 3  && this.state.buttonId2 !== 4 && this.state.buttonId2 !== 5  && this.state.buttonId2 !== 6 && this.state.buttonId2 !== 7  && this.state.buttonId2 !== 8 && this.state.buttonId2 !== 9  && this.state.buttonId2 !== 10 && this.state.buttonId2 !== 11  && this.state.buttonId2 !== 12 && <div style={{textAlign: "center"}}> Select a category </div>}
             </div>
          </Col>
        </Row>
        <Row>
          <Col> {this.calculateDifference()} </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
