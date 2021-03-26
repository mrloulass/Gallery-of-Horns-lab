import React from 'react';
import arrow_heart from './arrow_heart.png';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfLikesWithHearts: 0
    }
  }

  imageClicked = () => {
    this.setState({
      numberOfLikesWithHearts: this.state.numberOfLikesWithHearts + 1
    });
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <img onClick={this.imageClicked} src={this.props.image_url} alt={this.props.keyword} title={this.props.title} />
        <p>{this.props.description} </p>
        <p>Number of Horns: {this.props.horns}</p>
        <div>
          <img src={arrow_heart} alt="Arrow with Heart" />{this.state.numberOfLikesWithHearts}
        </div>
      </div>
    )
  }
}

export default HornedBeast;
