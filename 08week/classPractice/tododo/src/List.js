import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap'


export default class List extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return ( 
            <ListGroup>
                {this.props.tasks.map(t=> <ListGroupItem>{t}</ListGroupItem>)}
            </ListGroup>
        ) 
    }
}