"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _core = require("@material-ui/core");

var _reactCustomScrollbars = require("react-custom-scrollbars");

var _navbar = _interopRequireDefault();

var _cardImage = _interopRequireDefault();

var _footer = _interopRequireDefault();

var _image = _interopRequireDefault();

var _paragraph = _interopRequireDefault();

var _reactJsonEditorAjrm = _interopRequireDefault(require("react-json-editor-ajrm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const sampledata = {
  "data": [{
    "rowType": "header_1",
    "height": 75,
    "children": [{
      "colType": "navbar",
      "colWidth": 12
    }]
  }, {
    "rowType": "feature_1",
    "height": 250,
    "children": [{
      "colType": "image",
      "colWidth": 5
    }, {
      "colType": "paragraph",
      "colWidth": 7
    }]
  }, {
    "rowType": "feature_1",
    "height": 250,
    "children": [{
      "colType": "paragraph",
      "colWidth": 7
    }, {
      "colType": "image",
      "colWidth": 5
    }]
  }, {
    "rowType": "feature_1",
    "cover": "color",
    "height": 370,
    "children": [{
      "colType": "card-image",
      "colWidth": 3
    }, {
      "colType": "card-image",
      "colWidth": 3
    }, {
      "colType": "card-image",
      "colWidth": 3
    }, {
      "colType": "card-image",
      "colWidth": 3
    }]
  }, {
    "rowType": "feature_1",
    "height": 185,
    "children": [{
      "colType": "whitespace",
      "colWidth": 2
    }, {
      "colType": "image",
      "colWidth": 8
    }, {
      "colType": "whitespace",
      "colWidth": 2
    }]
  }, {
    "rowType": "footer_1",
    "height": 50,
    "children": [{
      "colType": "footer",
      "colWidth": 12
    }]
  }]
};

class App extends _react.default.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "_processJsonInput", o => {
      if (!o.error) {
        this.setState({
          data: {
            data: JSON.parse(o.json)
          }
        });
      }
    });

    _defineProperty(this, "_renderColType", (col, colindex, row) => {
      let el = _react.default.createElement(_core.Paper, {
        className: "paper"
      }, _react.default.createElement("span", null, " ", col.colWidth, " "));

      let gridClass = 'grid';

      switch (row.cover || 'none') {
        case "color":
          gridClass += ' color';
          break;

        case "none":
        default:
          break;
      }

      switch (col.colType) {
        // case 'footer':
        //   el = <Footer />;
        //   break;
        // case 'image':
        //   el = <ImageComp />;
        //   break;
        // case 'paragraph':
        //   el = <Paragraph />;
        //   break;
        // case 'navbar':
        //   el = <NavBar />;
        //   break;
        case 'card-image':
          el = _react.default.createElement("div", {
            className: "card-image"
          }, _react.default.createElement("div", {
            className: "img",
            style: {
              backgroundImage: `url(https://picsum.photos/500/500/?random)`
            }
          }), _react.default.createElement("div", {
            className: "content"
          }, _react.default.createElement("span", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")));
          break;

        case 'whitespace':
        default:
          el = _react.default.createElement("div", null);
          break;
      }

      return _react.default.createElement(_core.Grid, {
        className: gridClass,
        key: `grid-row-content-${colindex}`,
        item: true,
        xs: col.colWidth
      }, el);
    });

    this.state = {
      codetheme: {
        default: '#D4D4D4',
        background: '#1E1E1E',
        background_warning: '#1E1E1E',
        string: '#CE8453',
        number: '#B5CE9F',
        colon: '#49B8F7',
        keys: '#9CDCFE',
        keys_whiteSpace: '#AF74A5',
        primitive: '#6392C6'
      },
      data: sampledata,
      inputData: sampledata
    };
  }

  render() {
    let {
      codetheme,
      data: {
        data
      },
      inputData
    } = this.state;
    return _react.default.createElement("div", {
      className: "main-wrapper",
      id: "main-wrapper"
    }, _react.default.createElement("div", {
      className: "preview"
    }, _react.default.createElement(_reactCustomScrollbars.Scrollbars, {
      renderThumbHorizontal: () => _react.default.createElement("div", null)
    }, sampledata.data.map((f, i) => {
      return _react.default.createElement(_core.Grid, {
        key: `grid-row-${i}`,
        container: true,
        spacing: 8
      }, f.children.map((ff, ii) => {
        return this._renderColType(ff, ii, f);
      }));
    }))), _react.default.createElement("div", {
      className: "json"
    }, _react.default.createElement(_reactCustomScrollbars.Scrollbars, {
      renderThumbHorizontal: () => _react.default.createElement("div", null)
    }, _react.default.createElement(_reactJsonEditorAjrm.default, {
      id: 'uniqueString-jsonInut',
      placeholder: data,
      colors: codetheme,
      height: "550px",
      onChange: this._processJsonInput
    }))));
  }

}

module.exports = _react.default.createElement(App, null);