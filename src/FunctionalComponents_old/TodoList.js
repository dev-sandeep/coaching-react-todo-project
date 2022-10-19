import * as React from "react";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

const TodoList = (props) => {
    const editRequestHandler = (data)=>{
        //open dialog
        let editedText = prompt("Rename your task", data.text);
        props.editTaskHandler(editedText, data.id);
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Task Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(el => (
                    <tr>
                        <td>{el.id}</td>
                        <td>{el.text}</td>
                        <td>
                            <button type="danger" onClick={()=>{props.deleteHandler(el)}}>
                                Delete
                            </button>
                            <button type="primary" onClick={()=>{editRequestHandler(el)}}>
                                Edit
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default TodoList;