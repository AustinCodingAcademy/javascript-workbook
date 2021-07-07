import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List'
import Task from './Task';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTask: "",  
      tasks: [
            "Study Javascript", 
            "Explore North Austin", 
            "Feed Dog"
        ]
       
      }
      this.updateNewTask = this.updateNewTask.bind(this)
      this.addNewTask = this.addNewTask.bind(this)
    }


    addNewTask(){
      this.setState((previousState) => {
        return{
          newTask: "",
          tasks: [...previousState.tasks, previousState.newTask]    
        }    
      })
    } 

    updateNewTask (event){
      this.setState({
        newTask: event.target.value
      })
    }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md={{ size:8, offset: 2}}> 
              <h1>Tasks</h1>
              <Task newTask={this.state.newTask} updateNewTask={this.updateNewTask} addTask={this.addNewTask}/>
              &nbsp;
            <List tasks={this.state.tasks} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
