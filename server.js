require('dotenv').config();

const express = require('express');
const compression = require('compression');
const cors = require('cors');
const path  = require('path');

const env = process.env.NODE_ENV;
const port = process.env.PORT;
const endpoint = process.env.API_BASE_URL;

const app = express()
  .use(compression())
  .set("view engine", "pug")
  .use(express.static(path.join(__dirname, "./build")));

if (env === 'development') {
  app.use(cors()).set("views", path.join(__dirname, "./src/templates"));
}

if (env === 'production') {
  app.set("views", path.join(__dirname, "./build/templates"));
}

app.get('/', (req, res) => {
  res.render("index");
});

app.get('*', function(req, res) {
  res.send("not-found");
});

// =====================================================================================================================
if (env && port && endpoint) {
  app.listen(port, () => console.log('[ APP IS RUNNING ]'));
  console.log('[ CONFIG ]');
  console.log('   [ ENV ]', env);
  console.log('   [ PORT ]', port);
  console.log('   [ API ]', endpoint);
} else {
  console.log('[ CONFIG ]');
  console.log('   [ ENV ]', env);
  console.log('   [ PORT ]', port);
  console.log('   [ API ]', endpoint);
  console.log('[ CONFIG ERROR ]\n[ APP WILL NOT START ]');
}
// =====================================================================================================================
