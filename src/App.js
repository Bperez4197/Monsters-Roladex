import React, { Component } from "react";
import { CardList } from "./Components/card-list/card-list.component";
import { SearchBox } from "./Components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    // //Here, because all of our "this"'s are in the constructor, it knows its refering to this App class
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((error) => console.log(error.message));
  }

  //Arrow function automatically bind "this" to the class it originated from preventing us from having to bind every class method. Use Arrow function on any class methods we define that aren't part of react like render() or componentDidMount().
  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  // handleChange(event) {
  //   // In an event, "this" is set to the element that caused it such as a button or an input field. Therefore, we need to bind this function in our constructor so it know "this" points to the App class
  //   this.setState({ searchField: event.target.value });
  // }

  render() {
    //filteredMonsters returns a new array of monsters based on if their name includes whats in this.state.searchField. We then pass the filteredMonsters array as props instead of the complete monsters array to the CardList componenet
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        {/* //props are whats passed into the component, placeholder monsters and handleChange in this case.
        //props.children is whats passed in between the component like, <CardList>here is in between</CardList> */}
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.handleChange}
          //dont call function for events, assign function to events. so this.handleChange() would call the function immediately, even when there is no onChange event where this method is used and be wrong
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
