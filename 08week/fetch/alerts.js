'use strict';


class Alert extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: 'Well done!',
      type: this.props.type
    }
  }
  changeType = (e) => {
    this.setState({
      type: e.target.value
    })
  }

  render(){
    return (
      <div className={`alert alert-${this.state.type}`} role="alert">
        <strong>{this.state.message}</strong> You successfully read this important alert message.
        <input onChange={this.changeType} />
      </div>
    )
  }
}
const types = [
  'success',
  'warning',
  'danger',
  'info'
].map((type) => {
  return ( <Alert type={type} /> );
});

ReactDOM.render(<div>{types}</div>, document.getElementById('fetch'));
