import "./App.css";
import React, { Component } from "react";

class App extends Component {
  Person = {
    fullName: "Chuck Noris",
    bio: "Living Legend",
    imgSrc: "/chno.jpg",
    profession: "American Hero",
  };
  state = {
    show: false,
    time: 0,
  };
  toggle = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    this.time = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.toggle}>show text</button>
        {this.state.show ? (
          <div>
            <h1>{this.Person.fullName}</h1>
            <h2>{this.Person.bio}</h2>
            <img src={this.Person.imgSrc} width="200px" />
            <h5>{this.Person.profession}</h5>
          </div>
        ) : (
          <p>click to display</p>
        )}
        <h4>{this.state.time}</h4>
      </div>
    );
  }
}

export default App;
