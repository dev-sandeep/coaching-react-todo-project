import * as React from 'react';
import Card from 'react-bootstrap/Card';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Main = ()=>{
    const [state, setState] = React.useState({
        todoList: [{id:1, text: "Task1"}]
    });

    const saveTaskHandler = (text)=>{
        setState({
            todoList: [...state.todoList, {
                id: state.todoList.length + 1,
                text: text
            }]
        });
    } 

    const deleteHandler = (data)=>{
        //refine all the refiners, except the one selected
        const finalTodoList = state.todoList.filter(el=>el.id!==data.id);

        setState({
            todoList: finalTodoList
        });
    }

    const editTaskHandler = (text, id)=>{
        const completeTodoList = state.todoList;
        for(let i = 0; i < completeTodoList.length; i++){
            if(completeTodoList[i].id === id){
                completeTodoList[i].text = text;
            }
        }

        setState({todoList: completeTodoList});
    }

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
                                <AddTodo text="hello world" callback={saveTaskHandler} />
                                {/* table goes here */}
                                <TodoList editTaskHandler={editTaskHandler} deleteHandler={deleteHandler} list={state.todoList} />
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;