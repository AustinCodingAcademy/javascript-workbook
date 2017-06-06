'use strict';

class Alert extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    let alertType = `alert alert-${this.props.type}`;
    return (
      <div className={alertType} role="alert">
        <span>{this.props.msg}</span>
      </div>
    );
  }
}

ReactDOM.render(
  <Alert type='warning' msg='OH POOPS' />,
  document.querySelector('#bootstrap')
);
