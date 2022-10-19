import * as React from 'react';
import Card from 'react-bootstrap/Card';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";


export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            todoList : [
                {
                    id: 1,
                    text: "task1"
                },
                {
                    id: 2,
                    text: "task2"
                },
            ]
        }
    }

    callbackExample(text){
        console.log(text);
    }

    render() {
        return (
            <div className='container'>
                <div className='col-lg-12'>
                    <div className='main-component'>
                        <div className='title'>
                            <Card style={{ marginTop: "10em" }}>
                                <Card.Body>
                                    <Card.Title>My Todo List</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Manages time</Card.Subtitle>

                                    {/* input box goes here */}
                                    <AddTodo text="hello world" callback={this.callbackExample} />
                                    {/* table goes here */}
                                    <TodoList list={this.state.todoList} />
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}