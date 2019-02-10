import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FemaleAsian from "./Charts/Women/asian";
import SexualAssault from "./SexualAssault";
import Poverty from "./Poverty";
import NavBar from "./NavBar";

const Main = () => (
  <Switch>
    <Route exact path="/" component={SexualAssault} />
    <Route exact path="/sexualassault" component={SexualAssault} />
    <Route exact path="/poverty" component={Poverty} />
  </Switch>
);

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



  render() {
    return (
      <div className="App">
      <NavBar />
      <Container className="contain">
         <Row>
          <Col> 
          </Col>
        </Row>
        <Main />
      </Container>
      </div>
    );
  }
}

export default App;
