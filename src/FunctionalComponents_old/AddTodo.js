import * as React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const AddTodo = (props) =>{
    const [text, setText] = React.useState('');
    const inputRef = React.createRef();

    const onChangeHandler = (e)=>{
        setText(e.target.value);
    }

    const onSaveHander = ()=>{
        props.callback(text);
        inputRef.current.value = "";
    }
    
    return (
        <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Task Name"
                    aria-label="Task Name"
                    aria-describedby="basic-addon2"
                    onChange={onChangeHandler}
                    ref={inputRef}
                />
                <Button variant="outline-secondary" onClick={onSaveHander} id="button-addon2">
                    Save
                </Button>
            </InputGroup>
    );
}

export default AddTodo;