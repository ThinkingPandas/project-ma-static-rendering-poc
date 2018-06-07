"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Paragraph extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return _react.default.createElement("div", {
      className: "par"
    }, _react.default.createElement("h3", null, "Paragraphs"), _react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id dui nec purus eleifend tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent lacus mi, vehicula eget massa vitae, ornare faucibus arcu. Aliquam dui nisi, molestie in faucibus nec, fermentum quis odio. Ut ut felis auctor, finibus elit commodo, bibendum massa. Praesent id laoreet massa, sed ultrices sapien. Integer non porttitor purus. Quisque tempus ligula non magna cursus eleifend."));
  }

}

exports.default = Paragraph;