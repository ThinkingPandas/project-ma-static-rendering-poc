import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import { Grid, Paper, TextField } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';
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
                    return (
                      <Grid
                        key={`grid-row-content-${ii}`}
                        item
                        xs={ff.colWidth}
                        style={{ display: 'flex' }}
                      >
                        {ff.colType === 'whitespace' ? null : (
                          <Paper className="paper">
                            <span> {ff.colWidth} </span>
                          </Paper>
                        )}
                      </Grid>
                    );
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
