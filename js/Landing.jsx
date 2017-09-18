import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { setSearchTerm } from "./actionCreators";

class Landing extends Component {

  goToSearch = event => {
    // prevent form from submitting
    event.preventDefault();
    this.props.history.push("/search");
  }

  render() {
    return (
      <div className="landing">
        <h1>explore.tv</h1>
        <form onSubmit={this.goToSearch}>
          <input
            onChange={this.props.handleSearchTermChange}
            value={this.props.searchTerm}
            type="text"
            placeholder="Search"
          />
        </form>
        <Link to="/search" onClick={this.props.handleSearchTermClear}>Or Browse All</Link>
      </div>
    );
  }
}
// injects redux state into props
const mapStateToProps = state => ({ searchTerm: state.searchTerm });
//
const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    // dispatch passes action to the root reducer in redux
    dispatch(setSearchTerm(event.target.value));
  },
  handleSearchTermClear() {
    dispatch(setSearchTerm(""));
  }
});
// connect is injecting state and dispatch into the Landing component as props.
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
