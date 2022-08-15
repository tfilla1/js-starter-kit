import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, firstName: 'bob', lastName: 'smith', email: 'bob@smith.com' },
    {
      id: 2,
      firstName: 'cindy',
      lastName: 'charles',
      email: 'cindy@charles.com',
    },
    { id: 3, firstName: 'tina', lastName: 'turner', email: 'tina@turner.com' },
  ]);
});

app.listen(port, function (err) {
  err ? console.log(err) : open('http://localhost:' + port);
});
