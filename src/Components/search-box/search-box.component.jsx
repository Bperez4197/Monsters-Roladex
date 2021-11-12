import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //   onChange={(event) =>
    //     this.setState({ searchField: event.target.value })
    //   }
    // This component was originally in App.js which is why it references this.setState
    //this.setState calls the render() method, therefore you cannot use it in the render method outside of an event or it will cause an infinite loop
    //  {
    // this.setState({ searchField: event.target.value }, () =>
    //   console.log(this.state.searchField)
    // );
    // because this.setState is an asynchronous (javascript doesn't know how long it'll take and it doesn't happen immediately) function, when we log this.state it is always a letter behind.
    // console.log(this.state.searchField);
    //To fix this we add a second argument to the this.setState method which is a callback function. this tells this.setState to set the state, and then when its done run this callback function
    // }
    // }
  />
);
