import React, {Component} from "react";
import {Card, Table} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

export default class Pokedex extends Component{

   // url = "https://pokeapi.co/api/v2/pokemon/";

    constructor(props){
        super(props);
        this.state = {
        pokemon: []
        }
    }

/*    componentDidMount() {
        axios.get(this.url)
            .then(response => console.log(response.data));
    }*/

    render(){
        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faList} /> Pokedex
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover variable="dark" className=" text-white">
                        <thead>
                        <tr>
                            <th>{{statusCode}}</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr align="center">
                            <td colSpan="4">No info available</td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}