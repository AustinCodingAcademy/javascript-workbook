'use strict';
// mashape's spoonacular api key -H 'X-Mashape-Key: YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o' \
class IngReCat extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        recipes: [],
        ingredients: ''
      }
    }
    render() {
      // const ingredients =this.state.people.map((ing)=>{
      return ( < div >
        <IngForm />
        </div>
        );
      };
    }

  class IngForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      //this.getRecipes = this.getRecipes.bind(this);
      }

      handleChange(event) {
        this.setState({
          value: event.target.value
        });
        console.log(this.state.value);
      }
      handleSubmit(event) {
        event.preventDefault();
//trying to isolate the strings from whitespace
        this.state.ingredients = this.state.value.split(',');
        let ing = this.state.ingredients;
        console.log(this.state.ingredients[0]);
        console.log(ing.length);
        console.log(ing[2].trim());
        console.log(ing.forEach(x => {x.trim();}));
        console.log(ing);

      //Form Works, fetch works....putting it together
      //  this.getRecipes();
      }

      // getRecipes() {
      //   let url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1";
      //   fetch(url, {
      //     method: "GET",
      //     // body: JSON.stringify(data),
      //     headers: {
      //       Accept: "application/json",
      //       "X-Mashape-Key": "YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o",
      //       //  "Content-Type": "application/json"
      //     }
      //
      //   }).then((response) => {
      //     return response.json().then((data) => {
      //       this.setState({
      //         recipes: data.split('')
      //       })
      //       // .map(recipe =>{
      //       //   return recipe;
      //
      //       console.log(this.state.recipes);
      //     });
      //     // let results = this.state.recipes.map(rec => {
      //     //   return <div > < img src = {rec.image}/><p>{rec.title}</p >< /div>;
      //     });

      render() {
        //   results.map((rec) =>{
        //     return <div> <p>rec.title</p>
        //                 <img src={rec.image} />
        //             </div>});

        return (

          <div>
            <h1> Enter Your Ingredients < /h1>
              <form onSubmit = {this.handleSubmit} >
                <label > Ingredients:
                  <input type = "text" value = {this.state.value}  onChange = {this.handleChange} />
                </label>
                <input type = "submit" value = "Submit" />
                </form>
                <li> results soon </li>
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

    //   submitForm(e) {
    //     event.preventDefault();
    //
    //   }
    //   render() {
    //     return (
    //       <form onSubmit ={this.submitForm.bind(this)}>
    //       <input />
    //       <button type="submit">Submint</button>
    //       </form>
    //     )}



    ReactDOM.render( < IngReCat / > , document.querySelector('#fetch'));
    // ReactDOM.render(<RecipeResults />, document.querySelector('#results'));
