import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Starting Value'};
  }

  render() {
    return (
    <div>
      <input
       value={this.state.term}
       onChange={event => this.setState({ term: event.target.value })} />
    </div>
    // sets the state to the empty string defined in term above
    // when the onChange handler runs, the value of the input has not actually changed
    // the event handler updates this.state.term with the new value, finally component finishes
    // rendering. SO-typing in input doesn't actually update view, just triggers the event

    );
  }
}



export default SearchBar;
