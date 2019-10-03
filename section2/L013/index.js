function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;

    if (num === 7) {
      msg = (
        <div>
          <h2>You are winner!</h2>
          <img src="https://media.giphy.com/media/dYZuqJLDVsWMLWyIxJ/giphy.gif" />
        </div>
      );
    } else {
      msg = <p>You did not win.</p>;
    }

    return (
      <div>
        <h1>Your number is... {num}</h1>
        {msg}
      </div>
    );
  }
}

ReactDOM.render(<NumPicker />, document.getElementById("root"));
