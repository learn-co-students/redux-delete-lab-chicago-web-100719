import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li key={this.props.band.id}>
        {this.props.band.name}
        <button onClick={() => this.props.removeBand(this.props.band.id)}>Remove</button>
      </li>
    );
  }
};

export default Band;
