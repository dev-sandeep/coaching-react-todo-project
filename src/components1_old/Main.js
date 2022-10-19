import * as React from 'react';
import Card from 'react-bootstrap/Card';
import AddTodoField from './AddTodoField';
import TodoList from './TodoList';
import Table from 'react-bootstrap/Table';



export default class Main extends React.Component {
    constructor() {
        super();
        //iniitial state of the todo
        this.state = {
            list: []
        };

        this.onTodoAdd = this.onTodoAdd.bind(this);
    }

    onTodoAdd(text) {
        const finalList = { list: [...this.state.list, { id: this.generateRandomNum(), text: text }] };
        console.log(finalList);
        this.setState(finalList);
    }

    callbackExample(text){
        console.log(text);
    }

    //imp
    generateRandomNum = () => Math.floor(Math.random() * 1000);

    render() {
        return (
            <section className='main-component'>
                <div className='container'>
                    <div className='col-lg-12' style={{ marginTop: "10em" }}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Todo List</Card.Title>



                                <AddTodoField callback={this.callbackExample} onAdd={this.onTodoAdd} />
                                <hr />
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Task</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <TodoList list={this.state.list} />
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>

                    </div>
                </div>
            </section>
        );
    }
}