'use strict';

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Well done! You successfully read this important message.',
      type: this.props.type
    }
  }

  changeType = (e) => {
    this.setState({
      type: e.target.value
    })
  }

  render() {
    return (
      <div className={`alert alert-${this.state.type}`} role="alert">
        <span>{this.sate.message}</span>
        <input onChange={this.changeType} />
      </div>
    )
  }


  const = [
    'success',
    'warning',
    'danger',
    'info'
  ].map((type) => {
    return (<Alert type={type} />)
  })
}


ReactDOM.render(<div>{types}</div>, document.querySelector('#bootstrap'));
