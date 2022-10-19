import * as React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

export default class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text : ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSaveHander = this.onSaveHander.bind(this);
        this.onSaveHander = this.onSaveHander.bind(this);

    }

    onChangeHandler(e) {
        this.setState({
           text: e.target.value 
        });
    }

    onSaveHander(){
        // console.log(this.state.text);
        console.log(this.props.text);
        console.log(this.props.callback("sandeep"));
    }

    render() {
        return (
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Task Name"
                    aria-label="Task Name"
                    aria-describedby="basic-addon2"
                    onChange={this.onChangeHandler}
                />
                <Button variant="outline-secondary" onClick={this.onSaveHander} id="button-addon2">
                    Save
                </Button>
            </InputGroup>
        );
    }
}