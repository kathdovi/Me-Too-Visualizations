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
         buttonId: null
        }
        this.setButton = this.setButton.bind(this);
      }
      setButton(id){
        this.setState({buttonId: id});
      }
       setButton2(id){
        this.setState({buttonId2: id});
      }
  render() {
    return (
      <Container>
        <Row>
          <Col >  
            <input className={this.state.buttonId === 1? "button1" : 
              "button1"} onClick={() => this.setButton(1)} value="Asian Women" 
               type="button" ref="button" />
            <input className={this.state.buttonId === 2? "button2" : 
            "button2"} onClick={() => this.setButton(2)}  value="White Women" 
             ref="button1" type="button" />
             <input className={this.state.buttonId === 3? "button3" : 
              "button3"} onClick={() => this.setButton(3)} value="Hispanic Women" 
               type="button" ref="button" />
            <input className={this.state.buttonId === 4? "button4" : 
            "button4"} onClick={() => this.setButton(4)}  value="Black Women" 
             ref="button1" type="button" />
             <input className={this.state.buttonId === 5? "button5" : 
              "button5"} onClick={() => this.setButton(5)} value="Native American Women" 
               type="button" ref="button" />
            <input className={this.state.buttonId === 6? "button6" : 
            "button6"} onClick={() => this.setButton(6)}  value="Mixed Race Women" 
             ref="button1" type="button" />
            <input className={this.state.buttonId === 7? "button7" : 
              "button7"} onClick={() => this.setButton(7)} value="Asian Men" 
               type="button" ref="button" />
            <input className={this.state.buttonId === 8? "button8" : 
            "button8"} onClick={() => this.setButton(8)}  value="White Men" 
             ref="button1" type="button" />
             <input className={this.state.buttonId === 9? "button9" : 
              "button9"} onClick={() => this.setButton(9)} value="Hispanic Men" 
               type="button" ref="button" />
            <input className={this.state.buttonId === 10? "button10" : 
            "button10"} onClick={() => this.setButton(10)}  value="Black Men" 
             ref="button1" type="button" />
             <input className={this.state.buttonId === 11? "button11" : 
              "button11"} onClick={() => this.setButton(11)} value="Native American Men" 
               type="button" ref="button" />
            <input className={this.state.buttonId === 12? "button12" : 
            "button12"} onClick={() => this.setButton(12)}  value="Mixed Race Men" 
             ref="button1" type="button" />
          </Col>
          <Col >
           <input className={this.state.buttonId2 === 1? "button1" : 
              "button1"} onClick={() => this.setButton2(1)} value="Asian Women" 
               type="button" ref="button" />
            <input className={this.state.buttonId2 === 2? "button2" : 
            "button2"} onClick={() => this.setButton2(2)}  value="White Women" 
             ref="button1" type="button" />
             <input className={this.state.buttonId2 === 3? "button3" : 
              "button3"} onClick={() => this.setButton2(3)} value="Hispanic Women" 
               type="button" ref="button" />
            <input className={this.state.buttonId2 === 4? "button4" : 
            "button4"} onClick={() => this.setButton2(4)}  value="Black Women" 
             ref="button1" type="button" />
             <input className={this.state.buttonId2 === 5? "button5" : 
              "button5"} onClick={() => this.setButton2(5)} value="Native American Women" 
               type="button" ref="button" />
            <input className={this.state.buttonId2 === 6? "button6" : 
            "button6"} onClick={() => this.setButton2(6)}  value="Mixed Race Women" 
             ref="button1" type="button" />
            <input className={this.state.buttonId2 === 7? "button7" : 
              "button7"} onClick={() => this.setButton2(7)} value="Asian Men" 
               type="button" ref="button" />
            <input className={this.state.buttonId2 === 8? "button8" : 
            "button8"} onClick={() => this.setButton2(8)}  value="White Men" 
             ref="button1" type="button" />
             <input className={this.state.buttonId2 === 9? "button9" : 
              "button9"} onClick={() => this.setButton2(9)} value="Hispanic Men" 
               type="button" ref="button" />
            <input className={this.state.buttonId2 === 10? "button10" : 
            "button10"} onClick={() => this.setButton2(10)}  value="Black Men" 
             ref="button1" type="button" />
             <input className={this.state.buttonId2 === 11? "button11" : 
              "button11"} onClick={() => this.setButton2(11)} value="Native American Men" 
               type="button" ref="button" />
            <input className={this.state.buttonId2 === 12? "button12" : 
            "button12"} onClick={() => this.setButton2(12)}  value="Mixed Race Men" 
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
             {this.state.buttonId !== 1  && this.state.buttonId !== 2 && this.state.buttonId !== 3  && this.state.buttonId !== 4 && this.state.buttonId !== 5  && this.state.buttonId !== 6 && <div> Select a category </div>}
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
             {this.state.buttonId2 !== 1  && this.state.buttonId2 !== 2 && this.state.buttonId2 !== 3  && this.state.buttonId2 !== 4 && this.state.buttonId2 !== 5  && this.state.buttonId2 !== 6 && <div> Select a category </div>}
             </div>
          </Col>
        </Row>
        <Row>
          <Col> Difference Analysis Here </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
