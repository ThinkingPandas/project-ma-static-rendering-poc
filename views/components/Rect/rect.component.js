"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Rect extends _react.default.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "updateWindowDimensions", () => {// let divdimension = document.getElementById('main-wrapper');
      // this.setState({
      //   windowr: { width: divdimension.offsetWidth*0.98, height: divdimension.offsetHeight*0.98 },
      // });
    });

    this.state = {
      menuList: [],
      style: {},
      windowr: {
        width: 0,
        height: 0
      }
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  render() {
    let {
      width,
      height,
      backgroundColor,
      left
    } = this.props;
    let {
      windowr
    } = this.state;
    return _react.default.createElement("div", {
      className: "tp-rect",
      style: {
        height: `${height / 100 * windowr.height}px`,
        width: `${width / 100 * windowr.width}px`,
        marginLeft: `${(left || 0) / 100 * windowr.width}`,
        backgroundColor: backgroundColor || 'rgba(4,4,4,0.2)'
      }
    });
  }

}

exports.default = Rect;