"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CardImage extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return _react.default.createElement("div", {
      className: "card-image"
    }, _react.default.createElement("div", {
      className: "img",
      style: {
        backgroundImage: `url(https://picsum.photos/500/500/?random)`
      }
    }), _react.default.createElement("div", {
      className: "content"
    }, _react.default.createElement("span", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")));
  }

}

exports.default = CardImage;