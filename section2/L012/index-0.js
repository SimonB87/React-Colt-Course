class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My number is {1 + 2 + 3 * 4}</h1>
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
