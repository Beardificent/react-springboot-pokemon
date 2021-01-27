import React, {Component} from "react";
import {Card, Form, Button, Col}  from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare, faSave} from '@fortawesome/free-solid-svg-icons';

export default class Add extends Component{

    constructor(props){
        super(props);
        this.state = {name: "", something: "",}
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
        this.handleChangeAdd = this.handleChangeAdd.bind(this)

    }

    handleSubmitAdd(event){
        alert("Name: " + this.state.name + ", " + "Something: " +  this.state.something);
        event.preventDefault();
    }

    handleChangeAdd(event){
    this.setState({[event.target.name]:event.target.value
    });
    }
    render(){
        return(
        <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header className="text-white"><FontAwesomeIcon icon={faPlusSquare}/> Add
            </Card.Header>
            <Form onSubmit={this.handleSubmitAdd} id="addForm">
            <Card.Body>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" name="name" value={this.state.name} onChange={this.handleChangeAdd} className="bg-dark text-white" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridSomething">
                            <Form.Label>Something</Form.Label>
                            <Form.Control required type="text" name="something" value={this.state.something} onChange={this.handleChangeAdd} className="bg-dark text-white" placeholder="Something" />
                        </Form.Group>
                    </Form.Row>
            </Card.Body>
            <Card.Footer>
                <Button size="sm" variant="success" type="submit"><FontAwesomeIcon icon={faSave}/> Submit
                </Button>
            </Card.Footer>
        </Form>
        </Card>
        );
    }
}