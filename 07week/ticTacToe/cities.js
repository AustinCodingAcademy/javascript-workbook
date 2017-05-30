'use strict';
//components!
class Welcome extends React.Component {
  constructor(){//don't need to pass props --something you pass in to the Component
    super();//always have to run super
    this.state = {
      name:'world'
      //cities: ['Boston','Austin','Chicago']
    };
  }
changeName(e) => {
  this.setSTate({name: e.target.value});
}
  render() {
  //  const cityItems = this.state.cities.map((city) =>{
      return (
        <div>
        <span>Hello, {this.state.name}!</span>
        <input type="text" on Change={this.changeName} />
        </div>);
    }
  }


ReactDom.render(<Cities />, document.getElementById('cities'));
