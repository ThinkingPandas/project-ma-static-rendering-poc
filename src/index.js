import React from 'react';
import { render } from "react-dom"
import { Grid, Paper, TextField } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';
import NavBar from './components/NavBar/navbar.component';
import CardImage from './components/CardImage/cardImage.component';
import Footer from './components/Footer/footer.component';
import ImageComp from './components/Image/image.component';
import Paragraph from './components/Paragraph/paragraph.component';
import JSONInput from 'react-json-editor-ajrm';

const sampledata = {
  "data": [
    {
      "rowType": "header_1",
      "height": 75,
      "children": [
        {
          "colType": "navbar",
          "colWidth": 12
        }
      ]
    },
    {
      "rowType": "feature_1",
      "height": 250,
      "children": [
        {
          "colType": "image",
          "colWidth": 5
        },
        {
          "colType": "paragraph",
          "colWidth": 7
        }
      ]
    },
    {
      "rowType": "feature_1",
      "height": 250,
      "children": [
        {
          "colType": "paragraph",
          "colWidth": 7
        },
        {
          "colType": "image",
          "colWidth": 5
        }
      ]
    },
    {
      "rowType": "feature_1",
      "cover": "color",
      "height": 370,
      "children": [
        {
          "colType": "card-image",
          "colWidth": 3
        },
        {
          "colType": "card-image",
          "colWidth": 3
        },
        {
          "colType": "card-image",
          "colWidth": 3
        },
        {
          "colType": "card-image",
          "colWidth": 3
        }
      ]
    },
    {
      "rowType": "feature_1",
      "height": 185,
      "children": [
        {
          "colType": "whitespace",
          "colWidth": 2
        },
        {
          "colType": "image",
          "colWidth": 8
        },
        {
          "colType": "whitespace",
          "colWidth": 2
        }
      ]
    },
    {
      "rowType": "footer_1",
      "height": 50,
      "children": [
        {
          "colType": "footer",
          "colWidth": 12
        }
      ]
    }
  ]
};

class App extends React.Component {
  constructor(props) {
    super(props);
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
        primitive: '#6392C6',
      },
      data: sampledata,
      inputData: sampledata,
    };
  }

  _processJsonInput = o => {
    if (!o.error) {
      this.setState({ data: { data: JSON.parse(o.json) } });
    }
  };

  _renderColType = (col, colindex, row) => {
    let el = (
      <Paper className="paper">
        <span> {col.colWidth} </span>
      </Paper>
    );
    let gridClass = 'grid';
    switch(row.cover || 'none'){
      case "color":
      gridClass+=' color';
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
        el = (<div className="card-image">
        <div
          className="img"
          style={{
            backgroundImage: `url(https://picsum.photos/500/500/?random)`,
          }}
        />
        <div className="content">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
      </div>)
        break;
      case 'whitespace':
      default:
        el = <div />;
        break;
    }

    return (
      <Grid
        className={gridClass}
        key={`grid-row-content-${colindex}`}
        item
        xs={col.colWidth}
      >
        {el}
      </Grid>
    );
  };

  render() {
    let {
      codetheme,
      data: { data },
      inputData,
    } = this.state;

    return (
      <div className="main-wrapper" id="main-wrapper">
        <div className="preview">
          <Scrollbars renderThumbHorizontal={() => <div />}>
            {sampledata.data.map((f, i) => {
              return (
                <Grid
                  key={`grid-row-${i}`}
                  container
                  spacing={8}
                >
                  {f.children.map((ff, ii) => {
                    return this._renderColType(ff, ii, f);
                  })}
                </Grid>
              );
            })}
          </Scrollbars>
        </div>
        <div className="json">
          <Scrollbars renderThumbHorizontal={() => <div />}>
            <JSONInput
              id={'uniqueString-jsonInut'}
              placeholder={data}
              colors={codetheme}
              height="550px"
              onChange={this._processJsonInput}
            />
          </Scrollbars>
        </div>
      </div>
    );
  }
}

module.exports = <App />
