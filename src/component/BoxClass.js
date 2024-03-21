import React, { Component } from 'react';

export default class BoxClass extends Component {

    // constructor(props) {
    //     super(props);
    // }
    //
    render() {
    const boxClass = `box ${this.props.result ? this.props.result.toLowerCase() : 'default'}`;
    return (
      <div className={boxClass}>
        <h2>{this.props.title}</h2><br/>
        <img className="item-img" src={this.props.item && this.props.item.img} alt={this.props.item && this.props.item.img}/><br/>
        <h2>{this.props.result}</h2><br/>
      </div>
    );
  }
}
