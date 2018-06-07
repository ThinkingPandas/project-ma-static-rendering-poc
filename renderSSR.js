const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('./views/index.js');

module.exports = function renderSSR(initialState) {
  // Model the initial state
  let content = renderToString(App);

  console.log(content);

  return { content };
};
