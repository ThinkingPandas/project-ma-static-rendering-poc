"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _Home = _interopRequireDefault(require("@material-ui/icons/Home"));

var _Code = _interopRequireDefault(require("@material-ui/icons/Code"));

var _Comment = _interopRequireDefault(require("@material-ui/icons/Comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Footer extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return _react.default.createElement("div", {
      className: "footer"
    }, _react.default.createElement(_core.Button, {
      variant: "outlined"
    }, "Home"), _react.default.createElement(_core.Button, null, "Features"), _react.default.createElement(_core.Button, null, "Team"), _react.default.createElement("div", {
      className: "filler"
    }), _react.default.createElement("div", {
      className: "title"
    }, _react.default.createElement("span", null, "\xA9 2018 Thinking Pandas. All Rights Reserved.")));
  }

}

exports.default = Footer;