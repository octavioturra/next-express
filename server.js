const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler();
const { parse } = require('url');

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(session({
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  }));

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  /* eslint-disable no-console */
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server ready on http://localhost:3000');
  });
});