import React, { Component } from 'react';
import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap'

export default class Task extends Component {
    render() {
        return (
        <InputGroup>
            <Input placeholder="Add task" onChange={this.props.updateNewTask} value={this.props.newTask}/>
                <InputGroupAddon addonType="append">
                    <Button color="primary" onClick={this.props.addTask}> Add task </Button>
                </InputGroupAddon>
        </InputGroup>
        )
    }
}
