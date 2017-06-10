'use strict';

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Well done!  You successfully read this important message.',
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
      <div className = {`alert alert-${this.state.type}`} role="alert">
        <span>(this.state.message)</span>
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
    return (<Alert type={type} />)
  });


reactDOM.render(<Alert type=('warning') />, document.querySelector('#bootstrap'));
