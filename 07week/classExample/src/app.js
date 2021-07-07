import React from 'react'
import ReactDOM from 'react-dom'


let rootElement = document.getElementById('root')

class BoldText extends React.Component {
    constructor(props){
        super(props)

    }
    render(){
        return (
            <strong> {this.props.text}</strong>
        )
    }
}
class Paragraph extends React.Component {
    render(){
        return (
            <p>This is <BoldText text="a bunch of words" /></p>
        )
    }  
}

let paragraph = React.createElement(Paragraph)

ReactDOM.render(paragraph, rootElement)