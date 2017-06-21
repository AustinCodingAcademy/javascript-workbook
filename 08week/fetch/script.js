

class Fetch extends React.Component {
  constructor() {
    super();
    this.state = {
      original: [],
      countries: [],
      sortBy: 'DEFAULT'
    }
  }



  componentDidMount() {
    fetch('https://api.openaq.org/v1/countries')
    .then(response => {
      response.json()
        .then(data => {
          this.setState({
            original: data.results,
            countries: data.results
          })

        })
    })
  }

  sortCountries() {
    const countries = this.state.countries;


    let result = null

    if (this.state.sortBy === 'DEFAULT')
      result = countries;
    // this checks to see what sortBy is set to if it is not default it sorts the the state of the data by its condition
    if (this.state.sortBy === 'count') {
    // this sorts the countries in ascending numerical order
      result = countries.sort((a, b) => a[this.state.sortBy] - b[this.state.sortBy] );
      console.log('countries: ', countries[0]);
    }
    if (this.state.sortBy === 'cities') {
    // this sorts the countries in ascending numerical order
      result = countries.sort((a, b) => a[this.state.sortBy] - b[this.state.sortBy] );
      console.log('countries: ', countries[0]);
    }
    if(this.state.sortBy === 'country'){
      result = countries.sort((a, b) => {
        if(a.name.toUpperCase() < b.name.toUpperCase()) {
          return -1;
        }
        else if(a.name.toUpperCase() > b.name.toUpperCase()) {
          return 1;
        }
        else {
            return 0;
        }
      });
    }



    return result.map(this.renderCountry)

  }

  renderCountry(country) {
    return (
      <div key={country.name}>
        <h1>{country.name}</h1>
        <h3>Country Code: {country.code}</h3>
        <h3>Cities: {country.cities}</h3>
        <h3>Locations: {country.locations}</h3>
        <h3>Count: {country.count}</h3>
      </div>
    )
  }

  render() {


    return (
      <div>
        <button onClick={() => this.setState({sortBy: 'country'})}>Sort By Country</button>
        <button onClick={() => this.setState({sortBy: 'count'})}>Sort By Count</button>
        <button onClick={() => this.setState({sortBy: 'cities'})}>Sort By Cities</button>
        {this.sortCountries()}
      </div>
    )
  }
}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
