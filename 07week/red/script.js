class HelloWorld extends React.Component {
  render() {

    return (
      <section style={
        {background "red"}
      } id="hello-world">
      <h2>{this.props.name}</h2>
      <h2>Something</h2>
      </section>
    );
  }
}

ReactDOM.render(<helloWorld name="Chris") />, document.getElementById("app"));
