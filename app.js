const cors = require('cors');
const express = require('express');
const apiRouter = require('./routes/api-router');
const {invalidPath, handlePSQLerrors, handleForeignKeyError, handleCustomErrors, handle500errors} = require('./controllers/news.controllers.errors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(apiRouter);
app.all('*', invalidPath);

app.use(handlePSQLerrors);
app.use(handleForeignKeyError);
app.use(handleCustomErrors);
app.use(handle500errors);

module.exports = app;