import React, { Component } from 'react';
import Flat from './flat.jsx';

class FlatList extends Component {
  constructor(props) {
    super(props)
  }

  flatList = () => {
    return this.props.flats.map((flat, index) => <Flat flat={flat} key={flat.lat} selected={flat.name === this.props.selectedFlat.name} selectFlat={this.props.selectFlat} index={index}/>)
  }

  render() {
    return (
      <div className="flat-list">
        { this.flatList() }
      </div>
    );
  }
}

export default FlatList;
