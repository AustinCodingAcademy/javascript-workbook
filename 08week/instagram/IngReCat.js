"use strict";
// mashape's spoonacular api key -H 'X-Mashape-Key: YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o' \
class IngReCat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (<IngForm />);
  }
}

class IngForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      recipes: [],
      ingredients: "",
      instructions: {},
      ing: [],
      menu: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getIndRec = this.getIndRec.bind(this);
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

    this.state.ingredients = this.state.value.split(",");
    this.state.ing = this.state.ingredients.map(x => x.trim());
    console.log(this.state.ingredients[0]);

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
        console.log(recIng);
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

    let endUrl = "&limitLicense=false&number=5&ranking=1";
    fetch(baseUrl + ing[0] + endUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-Mashape-Key": "YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o"
      }
    }).then(response => {
      console.log(response);
      return response.json().then(data => {
        console.log(data);
        this.setState({
          recipes: data
        });
      });
    });
  }

<<<<<<< HEAD
  // renderIngredients(instructions) {
  //   console.log(instructions);
  //   return(
  //
  //     <div className="ingredients">
  //     {instructions.recIng}
  //     </div>
  //   );
  // }          //{this.renderIngredients(this.state.instructions[rec.id])}

=======
  // renderIng (instructions){
  //   return (
  //     instructions.recIng.map(ing => <li>{ing.originalString}</li>)
  //   );
  // }//   {this.state.instructions[rec.id].recIng.map(rec => <li>rec.originalString</li>)}
  // // <ul>{this.renderIng(this.state.instructions[rec.id])}</ul>
>>>>>>> 3a5712ebff3f959a6c58e4b84fb5f4d42d94af0d

  renderInstructions(instructions) {
    let ingredients = instructions.recIng.map(ing =><li key="id">{ing}</li>)
    return (
<<<<<<< HEAD
      <div className="instructions">
=======
      <div>
        <ul>{ingredients}</ul>
>>>>>>> 3a5712ebff3f959a6c58e4b84fb5f4d42d94af0d
        {instructions.instructions}
      </div>
    );
  }

  render() {
//getting close, must find how to reference recIng
    let menu = this.state.recipes.map(rec => {
      return (
        <div key={rec.id}>
          <button onClick={() => this.getIndRec(rec.id)}> {rec.title} </button>
          <img className="recPic" src={rec.image} />

          {this.state.instructions[rec.id]
            ? this.renderInstructions(this.state.instructions[rec.id])
            : ""}
        </div>
      );
    });

    return (
      <div>
        <h1> Enter Your Ingredients </h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            {" "}Ingredients:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div> {menu}</div>
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
//ReactDOM.render(<CatPic />, document.querySelector('#catPic'));
