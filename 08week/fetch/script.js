'use strict';

class Instagram extends React.Component {
  constructor() {
    super();
    this.state = {
      thumbnails: []
    }
  }
  render() {
    const thumbnails = this.state.thumbnails.map((thumbnail) =>
      return (
        <div className='col'>
          <img src={thumbnail} />
        </div>
      )
    )
    return(
      <div className='row'>
        {thumbnail}
      </div>
    )
  }
}

ReactDOM.render
