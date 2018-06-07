import React from 'react';
import './rect.style.scss';

export default class Rect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [],
      style: {},
      windowr: {
        width: 0,
        height: 0,
      },
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    // let divdimension = document.getElementById('main-wrapper');
    // this.setState({
    //   windowr: { width: divdimension.offsetWidth*0.98, height: divdimension.offsetHeight*0.98 },
    // });
  };

  render() {
    let { width, height,backgroundColor,left } = this.props;
    let { windowr } = this.state;
    return (
      <div
        className="tp-rect"
        style={{
          height: `${((height / 100)  * windowr.height)}px`,
          width: `${((width / 100)  * windowr.width)}px`,
          marginLeft:`${(((left||0) / 100)  * windowr.width)}`,
          backgroundColor:backgroundColor || 'rgba(4,4,4,0.2)'
        }}
      />
    );
  }
}
