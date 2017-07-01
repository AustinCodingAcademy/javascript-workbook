"use strict";
// mashape's spoonacular api key -H 'X-Mashape-Key: YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o' \
class IngReCat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <IngForm />;
  }
}

class IngForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      recipes: {},
      ingredients: [],
      instructions: {},
      ing: "",
      menu: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.getIndRec = this.getIndRec.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
    console.log(this.state.value);
  }
  handleSubmit(event) {
    event.preventDefault();
    let ingString = this.state.value.split(",").map(x => x.trim());

    ingString = ingString.map((x,i)=>{

      let lastIdx = ingString.length-1;
      console.log(lastIdx)
      if(i == lastIdx){
        return x;
      }
      else{
        return x+"%2C";
      }
    });
    ingString.join('');

    console.log(ingString)
    this.setState({
       ing: ingString.join('')

    });
    this.getRecipes();
  }
  getIndRec(id) {
    //let recBaseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/{id}/information?includeNutrition=false";
    let recBaseUrl =
      "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/";
    let recId = id;
    let recEndUrl = "/information?includeNutrition=false";

    fetch(recBaseUrl + recId + recEndUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-Mashape-Key": "YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o"
      }
    }).then(response => {
      console.log(response);
      return response.json().then(data => {
        var recIng = data.extendedIngredients.map(ing => ing.originalString);
        var instructions = data.instructions;
        this.setState({
          instructions: {
            ...this.state.instructions,
            [id]: { recIng, instructions }
          }
        });
        console.log(data);
      });
    });
  }
  //"https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1"
  getRecipes() {
    let ing = this.state.ing;
    let baseUrl =
      "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=";
    //apples%2Cflour%2Csugar
    let endUrl = "&limitLicense=false&number=10&ranking=1";
    fetch(baseUrl + ing + endUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-Mashape-Key": "YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o"
      }
    }).then(response => {
      console.log(response);
      return response.json().then(data => {
        console.log(data);
        let page1 = data.slice(0,5);
        let page2 = data.slice(5);
        this.setState({
          recipes : data,
            page1: page1,
            page2: page2
          })
        });
      });
    };


  renderInstructions(instructions) {
    let ingredients = instructions.recIng.map(ing => <li key={ing}>{ing}</li>);
    return (
      <div className="recipeIns">
        <ul>{ingredients}</ul>
        {instructions.instructions}
      </div>
    );
  }

  render() {
    let menu;
    // try{
    if(this.state.page1){
      menu = this.state.page1[0].map(rec =>{
        return (
          <div className="recipe" key={rec.id}>
            <button onClick={() => this.getIndRec(rec.id)}> {rec.title} </button>
            <img
              className="recPic"
              src={rec.image}
              alt="http://thecatapi.com/api/images/get?format=src&size=med"
            />
            {this.state.instructions[rec.id]
              ? this.renderInstructions(this.state.instructions[rec.id])
              : ""}
          </div>
        );
      });
    }
    // catch(e){}

    return (
      <div className="form">
        <h1> Enter Your Ingredients </h1>
        <form onSubmit={this.handleSubmit}>

          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <input type="submit" value="Submit" />
        </form>

        <div className="recipe"> {menu}</div>
      </div>
    );
  }
}

class CatPic extends React.Component {
  constructor() {
    super();
    this.state = {
      kitty: 'http://thecatapi.com/api/images/get?format=src&size=med"'
    };
    this.resetCatPic = this.resetCatPic.bind(this);
  }

  resetCatPic() {
    let newCat = "http://thecatapi.com/api/images/get?format=src&size=med";
    fetch(newCat)
      .then(function(response) {
        console.log(response);
        return response.blob();
      })
      .then((myBlob) => {
        console.log(myBlob);
        // debugger
        this.setState({
          kitty:  URL.createObjectURL(myBlob)
        });
      });
  }

  //  this.forceUpdate();
  //   kitty: "http://thecatapi.com/api/images/get?format=src&size=med"
  // });

  //   this.setState({
  //     kitty:  "http://thecatapi.com/api/images/get?format=src&size=med"
  //   });
  // }
  // reset() {
  //   this.setState({
  //     kitty: <a href="http://thecatapi.com">
  //       <img src="http://thecatapi.com/api/images/get?format=src&size=med" />
  //   });
  // }

  render() {
    return (
      <div>
        <a href="http://thecatapi.com">
          <img className="catPic" src={this.state.kitty} />
        </a>
        <button className="btn-class" onClick={this.resetCatPic}>New Cat</button>
      </div>
    );
  }
}

// class RecipeResults extends React.Component {
//   constructor(props){
//     super(props);
//     this.state ={
//       results: this.state.recipes
//       }
//     }
//
//     render(){
//       this.state.results.map(rec => {
//         let name = rec.title;
//         let pic = rec.image;
//
//         return(
//           <div>
//             <ul>
//              <li> {rec.title}</li>
//              <li>{rec.image}</li>
//             </ul>
//           </div>
//       );});
//
//     }
//
// }

ReactDOM.render(<IngReCat />, document.querySelector("#fetch"));
ReactDOM.render(<CatPic />, document.querySelector("#catPic"));
