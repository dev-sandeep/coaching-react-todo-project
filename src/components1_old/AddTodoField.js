import * as React from "react";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import {FormControl} from 'react-bootstrap';


export default class AddTodoField extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            taskName: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.inputref = React.createRef();
    }
    
    onChangeHandler(e){
        this.setState({
            taskName: e.target.value
        });
    }

    onSubmitHandler(){
        this.props.onAdd(this.state.taskName);
        this.clear();
    }
    
    clear = () => {
        this.setState({
            taskName: ''
        });
        this.inputref.current.value = '';
    }
    
    render() {
        return (
            <section className='input-field'>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Task Name"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={this.onChangeHandler}
                        ref={this.inputref}
                    />
                    <Button onClick={this.onSubmitHandler} variant="outline-secondary" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
            </section>
        );
    }
}