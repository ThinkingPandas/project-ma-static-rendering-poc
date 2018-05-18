import React from 'react';
import './paragraph.style.scss';

export default class Paragraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
          <div className="par">
            <h3>Paragraphs</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id
              dui nec purus eleifend tempus. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
              Praesent lacus mi, vehicula eget massa vitae, ornare faucibus
              arcu. Aliquam dui nisi, molestie in faucibus nec, fermentum quis
              odio. Ut ut felis auctor, finibus elit commodo, bibendum massa.
              Praesent id laoreet massa, sed ultrices sapien. Integer non
              porttitor purus. Quisque tempus ligula non magna cursus eleifend.
            </p>
          </div>
    );
  }
}
