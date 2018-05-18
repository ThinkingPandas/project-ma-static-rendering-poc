import React from 'react';
import './sidebar.style.scss';

export default class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuList:[]
    }
  }
  render() {
    return (
      <div className="tp-sidebar">
      </div>
    );
  }
}

