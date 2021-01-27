import React, {Component} from "react";
import {Jumbotron} from "react-bootstrap";

export default class Welcome extends Component {
    render() {
        return (
            <Jumbotron className="bg-dark text-white text-center">
                <blockquote className="blockquote mb-0">
                    <p>Pika, Pika, Pikachu</p>
                    <footer className="blockquote-footer mb-2">
                        Pikachu
                    </footer>
                </blockquote>
                <img
                    src="https://archives.bulbagarden.net/media/upload/thumb/6/61/Red_on_computer.png/441px-Red_on_computer.png"
                    alt="WelcomeSplash"/>
            </Jumbotron>
        );

    }
}