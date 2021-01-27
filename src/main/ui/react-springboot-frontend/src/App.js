import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import {Container, Row, Col} from "react-bootstrap";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Add from "./components/Add";
import Pokedex from "./components/Pokedex";

function App() {
    //add custom css before return if you want
    const marginTop = {
        marginTop : "20px"
    };

  return (
    <Router>
        <NavigationBar/>
   <Container>
    <Row>
        <Col lg={12} style={marginTop}>
            <Switch>
                <Route path="/" exact component={Welcome}/>
                <Route path="/add" exact component={Add}/>
                <Route path="/dex" exact component={Pokedex}/>
            </Switch>
        </Col>
    </Row>
   </Container>
        <Footer/>
    </Router>
  );
}

export default App;
