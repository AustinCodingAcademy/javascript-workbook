import React, { Component } from 'react';

class ListRender extends Component {

  constructor(props) {
    super(props)
    this.startIndex = null
    this.endIndex = null
  }

  handleCheck = (e) => {
    const index = e.target.value;
    const newList = this.props.list.slice();
    newList[index].isChecked = newList[index].isChecked ? false: true;
    this.props.changeList(newList);
  }

  handleDeleteClick = (e) => {
    const index = e.target.value;
    const newList = this.props.list.slice();
    newList.splice(index, 1);
    this.props.changeList(newList);
  }

  handleDragOver = (e) => {
    e.preventDefault();
    const thisIndex = e.target.getAttribute('index') ? e.target.getAttribute('index'): e.target.parentElement.getAttribute('index');
    if (this.endIndex !== thisIndex) {
      const newList = this.props.list.slice();
      newList.splice(thisIndex,0,newList.splice(this.startIndex,1)[0])
      this.startIndex = thisIndex;
      this.props.changeList(newList);
      this.endIndex = thisIndex
      console.log('startIndex',this.startIndex,'endIndex',this.endIndex)
    }
  }

 handleDragStart = (e) => {
    e.dataTransfer.setData("index", e.target.getAttribute('index'));
    this.startIndex = e.target.getAttribute('index')
    const newList = this.props.list.slice();
    newList[e.target.getAttribute('index')].visibility = 'hidden';
    setTimeout(()=> {
      this.props.changeList(newList)
    }, 1)
  }

  handleDragEnd = (e) => {
    const newList = this.props.list.slice();
    newList[this.startIndex].visibility = 'visible';
    this.props.changeList(newList)
  }

  handleDrop = (e) => {
    e.preventDefault();
    const endIndex = e.target.getAttribute('index') ? e.target.getAttribute('index'): e.target.parentElement.getAttribute('index');
    const newList = this.props.list.slice()
    newList[this.startIndex].visibility = 'visible'
    this.props.changeList(newList);
}
  render() {
    return this.props.list.map((item,index) => {
      return (
        <div draggable='true'
          onDragStart={(e)=> this.handleDragStart(e)}
          onDragEnd={(e)=> this.handleDragEnd(e)}
          onDrop={(e)=> this.handleDrop(e)}
          onDragOver={(e)=> this.handleDragOver(e)}
          key={index}
          index={index}
          className= {"list-item "}
          draggable="true"
          style={{visibility:item.visibility}}>
          <input
            type="checkbox"
            checked = {item.isChecked}
            value = {index}
            onClick = {(e)=>this.handleCheck(e)}/>
          <p>{item.inputValue}</p>
          <button
            className='delete'
            value ={index}
            onClick={(e)=>this.handleDeleteClick(e)}> x</button>
        </div>
      );
    });
  }
}

export default ListRender;
