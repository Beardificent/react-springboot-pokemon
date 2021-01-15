import React, {Component} from "react";
import {Navbar,Container, Col} from "react-bootstrap";



export default class Footer extends Component{
    render() {
        //to get the yearnumber follow line 9
        let fullYear = new Date().getFullYear();
        return(
            <Navbar fixed="bottom" bg="dark" variant="dark">
            <Container>
                <Col lg={12} className="text-center text-muted" >
                    <div> {fullYear} - {fullYear +1}, Copyright text or disclaimer</div>
                </Col>
            </Container>
            </Navbar>
        );

    }
}