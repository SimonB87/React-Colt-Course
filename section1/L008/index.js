//Function component
function Hello() {
  return (
    <div>
      <h1>Hello there!</h1>
      <h1>Hello there1!</h1>
      <h1>Hello there2!</h1>
    </div>
  );
}

ReactDOM.render(<Hello />, document.getElementById("root"));

//With the introduction of React Hooks we can write full-featured function components
