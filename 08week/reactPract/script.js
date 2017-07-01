'use strict';

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      message: "Well Done! You succesfully read this important message!",
      type: this.props.type
    }

  }

  // changeType = (e) => {
  //   this.setState({
  //     type: e.target.value
  //   })
  // }

render(){
  return(
    <div>
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
  return ({type})
});


ReactDOM.render(<Practice />, document.querySelector('#bootstrap'));
