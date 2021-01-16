import React, {Component} from "react";
import {Card, Table} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

export default class AddPokemon extends Component{
    render(){
        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faList} /> Pokedex
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover variable="dark" className=" text-white">
                        <thead>
                        <tr>
                            <th>#</th>
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