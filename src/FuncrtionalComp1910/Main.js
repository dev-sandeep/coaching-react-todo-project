import * as React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Card from 'react-bootstrap/Card';

const sample = [
    {
        id: 1,
        name: 'Wake up'
    },
    {
        id: 2,
        name: 'Go to school'
    },
    {
        id: 3,
        name: 'Go to college'
    },
];

const Main = ()=>{
    const [todoList, setTodoList] = React.useState([]);

    const addCallback = (todoText)=>{
        const uniqueId = Date.now();
        setTodoList([...todoList, {id: uniqueId, name: todoText}]);
    }

    const editCallback = (id, name)=>{
        const newTaskName = prompt("Updated task name", name);
        const allTasks = Object.assign([], todoList);

        const position = allTasks.findIndex(el=>el.id == id);
        allTasks[position] = {
            id: id,
            name: newTaskName
        };
        
        setTodoList(allTasks);
    }
    const deleteCallback = (id)=>{
        console.log(id);
    }

    return (
        <div className='container'>
            <div className='col-md-offset-3 col-lg-6'></div>
            <Card>
                <Card.Body>

                    <h3>My Todo List</h3>
                    <AddTodo callback={addCallback} />
                    <TodoList onEdit={editCallback} onDelete={deleteCallback} tasks={todoList} />
                </Card.Body>
            </Card>
        </div>
    );
}

export default Main;
