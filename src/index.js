'use strict';
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const routerConfig = require('./modules/route');
const config = require('./config/config');
const { logger } = require('./helpers/logger');

const init = () => {
  // *** express instance *** //
  const app = express();
  // Configuring the standard middlewares.
  setupStandardMiddlewares(app);
  configureApiEndpoints(app);
  app.listen(config.SERVER_PORT);
  console.log(`Listening on port ${config.SERVER_PORT} in ${config.NODE_ENV} mode`);
  logger.info(`Listening on port ${config.SERVER_PORT} in ${config.NODE_ENV} mode`)
};

const setupStandardMiddlewares = (app) => {
  // parse requests of content-type - application/json
  app.use(bodyParser.json());
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  return;
};

const configureApiEndpoints = (app) => {
  app.use("/api/v1/", routerConfig.init());
  // routerConfig.init(app);
  // define a route handler for the default home page
  app.get("/", (req, res) => {
    res.send("Welcome to Lettes!");
  });
};

init();
