import * as React from "react";
import Table from 'react-bootstrap/Table';

export default class TodoList extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Task Name</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.list.map(el => (
                                                <tr>
                                                <td>{el.id}</td>
                                                <td>{el.text}</td>
                                                <td>X</td>
                                            </tr>
                                            ))}
                                        </tbody>
                                    </Table>
        );
    }
}