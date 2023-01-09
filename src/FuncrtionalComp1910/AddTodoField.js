import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const AddTodo = (props)=>{
    const [currentTaskName, setCurrentTaskName] = React.useState('');

    const onChangeHandler = (e)=>{
        setCurrentTaskName(e.target.value);
    }

    const onSaveHandler = ()=>{
        props.callback(currentTaskName);
    }

    return (
        <section id="add-todo">
            {/* add todo input goes here */}
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Write your task"
                    aria-describedby="basic-addon2"
                    onChange={onChangeHandler}
                />
                <Button onClick={onSaveHandler} variant="outline-secondary" id="button-addon2">
                    Save
                </Button>
            </InputGroup>

        </section>
    );
}

export default AddTodo;
