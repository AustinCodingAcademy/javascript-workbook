'use strict';
// here i have set up three arrays, one for each column, and one store, to hold one block at a time
class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [
        100,75,50,25
      ],
      b:[

      ],
      c:[

    ],
    store:
      null
    }
    // here i have bound the functions th
    this.pickupPiece = this.pickupPiece.bind(this);
    this.selecta = this.selecta.bind(this)
    this.selectb = this.selectb.bind(this)
    this.selectc = this.selectc.bind(this)
    this.pastea = this.pastea.bind(this)
    this.pasteb = this.pasteb.bind(this)
    this.pastec = this.pastec.bind(this)
    this.reset = this.reset.bind(this)
  }

  pickupPiece(event){
    let index = event.target.getAttribute("data-stack");
    let newarrayone = this.state.a;
    let newstore = this.state.store;
    let newarraytwo = this.state.b;
    let newarraythree = this.state.c;
    let anyarray= this.state[index];
//here i have three if statements, two here and a third on line 52. the two here  form the basis for movement.
// the first if statement checks if the store is empty, and if it is, pops the last element into a new (newstore)
// the if statement after that checks if the move is valid
    console.log('the anyarray is',anyarray)
    if(newstore== null){
      newstore = anyarray.pop()
    } else if(newstore < anyarray[anyarray.length-1]|| anyarray[anyarray.length-1]==undefined){
      anyarray.push(newstore)
      newstore = null

    }

    //setting the new state var
    const newState = {
      a:newarrayone,
      b:newarraytwo,
      c:newarraythree,
      store: newstore
    }
    //checking for win
    if(newarraythree[3]==25){
      alert('you have won')
    }
    //setting the n
    this.setState(newState)
  }
  //the select_ functions are used to perform picking up actions through clicking the buttions that the user has the option to use
  selecta(){
    let newarrayone = this.state.a;
    let newstore = this.state.store;
    if(newstore==null){
      newstore = newarrayone.pop()
    }
    else{
      return
    }
      const newState = {
        a:newarrayone,
        store: newstore,
      }
      this.setState(newState)
  }
  selectb(){
    let newarraytwo = this.state.b;
    let newstore = this.state.store;
    if(newstore==null){
        newstore = newarraytwo.pop()
        console.log('i am in select b and the this.state.store is', this.state.store)
    }else{
      return
    }

      const newState = {
        b:newarraytwo,
        store: newstore
      }
      this.setState(newState)
  }
  selectc(){
    let newarraythree = this.state.c;
    let newstore = this.state.store;
    if(newstore==null){
      newstore= newarraythree.pop()
      console.log('the newstore is', newstore)
    }else{
      return
    }

      const newState = {
        c:newarraythree,
        store: newstore,
      }
      this.setState(newState)
  }
//the paste_ functions perform the dropping of actions for the buttions
  pastea(){
    let newstore = this.state.store
    let newarrayone = this.state.a
    if(newstore<newarrayone[newarrayone.length-1]|| newarrayone[newarrayone.length-1]==undefined){
      newarrayone.push(newstore)
      newstore = null

    }else{
      return
    }
    const newState = {
      a:newarrayone,
      store: newstore
    }
    this.setState(newState)
  }
  pasteb(){
    let newstore = this.state.store
    let newarraytwo = this.state.b
    if(newstore < newarraytwo[newarraytwo.length-1]|| newarraytwo[newarraytwo.length-1]== undefined){
      newarraytwo.push(newstore)
      newstore = null

    }else{
      return
    }
    const newState = {
      b:newarraytwo,
      store: newstore
    }
    this.setState(newState)
  }
  pastec(){
    let newstore = this.state.store
    let newarraythree = this.state.c
    if(newstore< newarraythree[newarraythree.length-1] || newarraythree[newarraythree.length-1] == undefined){
      newarraythree.push(newstore)
      newstore = null

    }else{
    return
    }
    const newState = {
      c:newarraythree,
      store: newstore
    }
    //checking for a win through button use
    this.setState(newState)
    if(newarraythree[3]==25){
      alert('you have won')
    }
  }
//the reset function resets the board once the user clicks on it. it works by setting the arrays back to the starting position
  reset(){
    let newstore = this.state.store
    let newarraythree = this.state.c
    let newarrayone = this.state.a
    let newarraytwo = this.state.b
      newarrayone = [100,75,50,25]
      newarraytwo = []
      newarraythree = []
      newstore = null
    const newState = {
      c:newarraythree,
      store: newstore,
      a : newarrayone,
      b: newarraytwo
    }
    this.setState(newState)
  }
  // these vars are set to map functions performed of the arrays in order to have the array data used as
  // we also have an alert that lets the user know that they can use buttons or click to play the game
  // buttons ton play the game, which are select piece and drop piece
  // a reset button
  //a tag of my name

  render() {

    var convertDIVone= this.state.a.map((block)=>{
      return <div data-block= {block}></div>
    });
    var convertDIVtwo= this.state.b.map((block)=>{
      return <div data-block= {block}></div>
    });
    var convertDIVthree= this.state.c.map((block)=>{
      return <div data-block= {block}></div>
    });
    return (
      <div>
      <div className="alert alert-primary" role="alert">
      <h3>Instructions</h3>
      You can either click on each column to drop and select blocks or you may click on the buttons to direct them around
<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span>
</button>
      </div>
      <h1>Towers of Hanoi!<span className = "badge badge-secondary" >By Andrew Thomas</span></h1>


        <p></p><button type="button" className="btn btn-primary btn-sm"  onClick={this.selecta}>Select Piece</button>
        <button type="button" className="btn btn-danger btn-sm" onClick = {this.pastea}>Drop Piece</button>
        <div data-stack="a" onClick={this.pickupPiece}>
        {convertDIVone}
        </div>
        <button type="button" className="btn btn-secondary btn-sm" onClick={this.selectb}>Select Piece</button>
        <button type="button" className="btn btn-warning btn-sm" onClick= {this.pasteb}>Drop Piece</button>
        <div data-stack="b" onClick={this.pickupPiece}>
        {convertDIVtwo}
        </div>
        <button type="button" className="btn btn-success btn-sm" onClick={this.selectc}>Select Piece</button>
        <button type="button" className="btn btn-info btn-sm" onClick= {this.pastec}>Drop Piece</button>
        <div data-stack="c" onClick={this.pickupPiece}>
        {convertDIVthree}
        </div>
        <button type="button" className="btn btn-light btn-sm" onClick = {this.reset}>Reset Game</button>

      </div>

    );
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
