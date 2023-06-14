'use strict';

require("dotenv").config();
let port = process.env.PORT || 3030;

const app = require('./src/server');

app.start(port);
