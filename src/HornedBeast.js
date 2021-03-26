import React from 'react';


class HornedBeast extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <img src={this.props.image_url} alt={this.props.keyword} title={this.props.title}/>
        <p>{this.props.description} </p>
        <p>Number of Horns: {this.props.horns}</p>
      
      </div>

    )
  }
}

export default HornedBeast;
