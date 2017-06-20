'use strict';
class Alert extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "The Early Birb Gets THe Verm.",
      type: this.props.type
    }
  }

  changeType = (e) => {
    this.setState({
      type: e.target.value
    })
  }

  render() {
    return {
      <div className= {`alert alert-${this.state.type}`} role="alert">
      <span>{this.state.message}</span>
      <input onChange={changeType} />
      </div>
    }
  }
}

const types = [
  'success',
  'warning',
  'danger',
  'info'
].map((type) => {
  return (<Alert type={type} />)
});

ReactDOM.render(<div>{types}</div>, document.querySelector('#pure-css'));
