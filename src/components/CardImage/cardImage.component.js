import React from 'react';
import './cardImage.style.scss';

export default class CardImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card-image">
        <div
          className="img"
          style={{
            backgroundImage: `url(https://picsum.photos/500/500/?random)`,
          }}
        />
        <div className="content">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
      </div>
    );
  }
}
