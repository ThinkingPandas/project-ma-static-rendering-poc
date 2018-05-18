import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import { Grid, Paper, TextField } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';
import NavBar from './components/NavBar/navbar.component';
import CardImage from './components/CardImage/cardImage.component';
import Footer from './components/Footer/footer.component';
import ImageComp from './components/Image/image.component';
import Paragraph from './components/Paragraph/paragraph.component';
import sampledata from './sampledata/test.json';
import JSONInput from 'react-json-editor-ajrm';

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
      case 'footer':
        el = <Footer />;
        break;
      case 'image':
        el = <ImageComp />;
        break;
      case 'paragraph':
        el = <Paragraph />;
        break;
      case 'navbar':
        el = <NavBar />;
        break;
      case 'card-image':
        el = <CardImage />
        break;
      case 'whitespace':
      default:
        el = null;
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
            {data.map((f, i) => {
              return (
                <Grid
                  key={`grid-row-${i}`}
                  container
                  spacing={8}
                  style={{ height: `${f.height}px` }}
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

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
