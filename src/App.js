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

 function FirstChart({ state }) {
  switch(state) {
    case 'femalehispanic':
      return <FemaleHispanic />;
    case 'femaleasian':
      return <FemaleAsian />;
    case 'femalewhite':
      return <FemaleWhite />;
    default:
      return null;
  }
}

const SecondChart = () => (
  <Switch>
    <Route exact path="/femalehispanic2" component={FemaleHispanic} />
    <Route exact path="/femaleasian" component={FemaleAsian} />
    <Route exact path="/femalewhite" component={FemaleWhite} />
    <Route exact path="/femalemixed" component={FemaleMixed} />
    <Route exact path="/femaleblack" component={FemaleBlack} />
    <Route exact path="/femalenative" component={FemaleNative} />
    <Route exact path="/malehispanic" component={MaleHispanic} />
    <Route exact path="/maleasian" component={MaleAsian} />
    <Route exact path="/malewhite" component={MaleWhite} />
    <Route exact path="/malemixed" component={MaleMixed} />
    <Route exact path="/maleblack" component={MaleBlack} />
    <Route exact path="/malenative" component={MaleNative} />
  </Switch>
);

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
             <input className={this.state.buttonId === 1? "button3" : 
              "button1"} onClick={() => this.setButton(3)} value="Hispanic Women" 
               type="button" ref="button" />
            <input className={this.state.buttonId === 2? "button4" : 
            "button2"} onClick={() => this.setButton(4)}  value="Black Women" 
             ref="button1" type="button" />
             <input className={this.state.buttonId === 1? "button5" : 
              "button1"} onClick={() => this.setButton(5)} value="Native American Women" 
               type="button" ref="button" />
            <input className={this.state.buttonId === 2? "button6" : 
            "button2"} onClick={() => this.setButton(6)}  value="Mixed Race Women" 
             ref="button1" type="button" />
          </Col>
          <Col >
            <input className={this.state.buttonId2 === 1? "button1" : 
              "button1"} onClick={() => this.setButton2(1)} value="Asian Men" 
               type="button" ref="button" />
            <input className={this.state.buttonId2 === 2? "button2" : 
            "button2"} onClick={() => this.setButton2(2)}  value="White Men" 
             ref="button1" type="button" />
             <input className={this.state.buttonId2 === 1? "button3" : 
              "button1"} onClick={() => this.setButton2(3)} value="Hispanic Men" 
               type="button" ref="button" />
            <input className={this.state.buttonId2 === 2? "button4" : 
            "button2"} onClick={() => this.setButton2(4)}  value="Black Men" 
             ref="button1" type="button" />
             <input className={this.state.buttonId2 === 1? "button5" : 
              "button1"} onClick={() => this.setButton2(5)} value="Native American Men" 
               type="button" ref="button" />
            <input className={this.state.buttonId2 === 2? "button6" : 
            "button2"} onClick={() => this.setButton2(6)}  value="Mixed Race Men" 
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
             {this.state.buttonId !== 1  && this.state.buttonId !== 2 && this.state.buttonId !== 3  && this.state.buttonId !== 4 && this.state.buttonId !== 5  && this.state.buttonId !== 6 && <div> Select a category </div>}
             </div>
          </Col>
          <Col xs={6}> 
            <div>
             {this.state.buttonId2 === 1 && <MaleAsian/>}
             {this.state.buttonId2 === 2 && <MaleWhite/>}
             {this.state.buttonId2 === 3 && <MaleHispanic/>}
             {this.state.buttonId2 === 4 && <MaleBlack/>}
             {this.state.buttonId2 === 5 && <MaleNative/>}
             {this.state.buttonId2 === 6 && <MaleMixed/>}
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
