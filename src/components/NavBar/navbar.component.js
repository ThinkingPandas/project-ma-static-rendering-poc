import React from 'react';
import { IconButton, Button } from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import Code from '@material-ui/icons/Code';
import Comment from '@material-ui/icons/Comment';
import './navbar.style.scss';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="navbar">
        <img src={require('../../images/logo.png')} />
        <div className="filler" />
        <Button variant="outlined">Home</Button>
        <Button>Features</Button>
        <Button>Team</Button>
        <div className="filler" />
        <IconButton aria-label="Add to shopping cart">
          <Home />
        </IconButton>
        <IconButton aria-label="Add to shopping cart">
          <Code />
        </IconButton>
        <IconButton aria-label="Add to shopping cart">
          <Comment />
        </IconButton>
      </div>
    );
  }
}
