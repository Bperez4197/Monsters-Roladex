import React, { Component } from "react";
import { CardList } from "./Components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((error) => console.log(error.message));
  }

  render() {
    return (
      <div className="App">
        {/* //props are whats passed into the component, "name" in this case.
        //props.children is whats passed in between the component like, <CardList>here is in between</CardList> */}
        <CardList name="Bryce">
          {this.state.monsters.map((monster) => (
            <h1 key={monster.id}> {monster.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
