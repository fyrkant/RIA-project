"use strict";
var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    app = require('./pages/app'),
    home = require('./pages/home'),
    login = require('./pages/login'),
    newThing = require('./pages/newThing'),
    router = require('./routes');

ReactDOM.render(
    <Router routes={router}/>,
    document.getElementById("container")
);

