import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                    <img
                        src="https://cdn.bulbagarden.net/upload/c/c5/Spr_1y_004.png" width="40" height="40" alt="BrandLogo" className="mr-2"/>React Spring Boot
                    </Link>
                <Nav className="mr-auto">
                    <Link to={"add"} style={{color: 'white'}} className="navbar-link m-2">Add</Link>
                    <Link to={"dex"} style={{color: 'white'}} className="navbar-link m-2">Pokedex</Link>
                </Nav>
            </Navbar>
        );
    }


}