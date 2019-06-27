
import React, { Component } from 'react';

class HoldMyBeer extends Component{
    constructor(props){
        super(props)
        this.state ={
            name: [],
            id: '',
            tagline: []
        }
    }
    componentDidMount(){
        fetch('https://api.punkapi.com/v2/beers')
            .then((response)=>response.json())
            .then((data)=>{
                data.map((element, index)=>{
                let n
                this.setState({name: data[index].name, tagline: data[index].tagline})
                })
            })
      }

    render() {
        return(
            <div>
            <div>
                {this.state.name[0]}
                {this.state.name[1]}
                {this.state.name[2]}
                {this.state.name[3]}
                {this.state.name[4]}
            </div>
            <div>
                {this.state.tagline[0]}
                {this.state.tagline[1]}
                {this.state.tagline[2]}
                {this.state.tagline[3]}
                {this.state.tagline[4]}
            </div>
            </div>
        )
    }
}

export default HoldMyBeer