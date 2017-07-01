'use strict';

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      message: "Well Done! You succesfully read this important message!",
      type: this.props.type
    }

  }

  changeType = (e) => {
    this.setState({
      type: e.target.value
    })
  }

render(){
  return(
    <div className={`alert alert-${this.state.type}`} role="alert">
      <span>{this.state.message}</span>
      <input onChange={this.changeType}/>
    </div>
  )}
}
const type =[
  'success',
  'warning',
  'danger',
  'info'
].map((type) =>{
  return (<Alert type ={type}/>)
});


ReactDOM.render(<Alert />, document.querySelector('#bootstrap'));
