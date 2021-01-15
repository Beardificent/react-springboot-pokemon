import React, {Component} from "react";
import {Card, Table} from "react-bootstrap";

export default class AddPokemon extends Component{
    render(){
        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>Add Pokemon
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover variable="dark">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}