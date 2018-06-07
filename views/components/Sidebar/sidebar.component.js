"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Sidebar extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: []
    };
  }

  render() {
    return _react.default.createElement("div", {
      className: "tp-sidebar"
    });
  }

}

exports.default = Sidebar;