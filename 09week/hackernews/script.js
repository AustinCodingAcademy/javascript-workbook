'use strict';

'use strict';
class Hacker extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      item : []
    }
  }
  componentWillMount(){
    const stories = [];
    for(let i=1; i < 111; i++){
      const url = `https://hacker-news.firebaseio.com/v0/item/${i}.json?print=pretty`
      fetch(url).then((result) => {
        return result.json();
      }).then((response) =>{
        stories.push(response);
        if(stories.length===100){
      this.setState({
        item: stories
      })
    }
    });
  }
}
  render(){
    console.log(this.state.item)

    var x =
      this.state.item.map((item, index)=>{
        return (<list key = {index}><a href ={item.url}>{item.title}</a><br></br></list >)
      })
    return(

      <ul>
        {x}
      </ul>
    )
  }
}
ReactDOM.render(<Hacker/>, document.getElementById('hacker-news'));
