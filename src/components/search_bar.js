import React , {Component} from 'react';
import './search_bar.css';
class SearchBar extends Component {
 state = {
   term: "Search"
 }
 handleInputChange = (event) => {
   this.setState({term: event.target.value})
   this.props.search(this.state.term);
 }

  render() {
    return (
      /*function returns value*/
      <input
        placeholder="Search"
        onChange={this.handleInputChange}
        className="search-bar"
        value={this.state.term}
      />
    )
  }
}

export default SearchBar;
