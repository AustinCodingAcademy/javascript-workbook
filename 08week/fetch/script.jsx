'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []

    };
  }
  componentDidMount () {
    fetch('http://services.groupkt.com/country/get/all').then((response) => {
      response.json().then((data) => {
        const countries = data.RestResponse.result;
        this.setState({countries});
        console.log(countries);
      });
    });
  }
  render () {
    return (
      <table className='myTable'>
        <tr>
          <th>Country</th>
          <th>Alpha 2 Code</th>
          <th>Alpha 3 Code</th>
        </tr>
        {this.state.countries.map(country =>
          <tr key={country.alpha3_code}>
            <td>{country.name}</td>
            <td className='alpha'>{country.alpha2_code}</td>
            <td className='alpha'>{country.alpha3_code}</td>
          </tr>
        )}
      </table>
    );
  }
}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
