import React from 'react';
import { IconButton, Button } from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import Code from '@material-ui/icons/Code';
import Comment from '@material-ui/icons/Comment';
import './footer.style.scss';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer">
        <Button variant="outlined">Home</Button>
        <Button>Features</Button>
        <Button>Team</Button>
        <div className="filler" />
        <div className="title">
          <span>© 2018 Thinking Pandas. All Rights Reserved.</span>
        </div>
      </div>
    );
  }
}
