import React from 'react';
import './image.style.scss';

export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="img"
        style={{
          backgroundImage: `url(https://picsum.photos/500/500/?random)`,
        }}
      />
    );
  }
}
