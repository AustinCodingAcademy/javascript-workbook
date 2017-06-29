'use strict'

class Findit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []

    }


  }

  componentDidMount() {
    fetch('http://randomuser.me/api/?results=10')
      
    }
  }

  render() {

    return(


    )
  }
}

ReactDOM.render(<Findit />, document.getElementById('root'))
