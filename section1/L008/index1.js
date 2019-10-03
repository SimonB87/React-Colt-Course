//Class component
//When returning we have to wrap the elements in one single tag
class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello there!</h1>
        <h1>Hello there!</h1>
        <h1>Hello there!</h1>
      </div>
    );
  }
}

//bellow we render only one h1, so we dont need to warp it in a <div>
/* class Hello extends React.Component {
  render() {
    return <h1>Hello there!</h1>;
  }
} */

ReactDOM.render(<Hello />, document.getElementById("root"));

//Benefits of Class based component
//* We can use State and Lifecycle methods.
