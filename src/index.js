"use strict";
var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    app = require('./components/app'),
    home = require('./components/home'),
    login = require('./components/login'),
    newThing = require('./components/newThing'),
    router = require('./routes');

ReactDOM.render(
    <Router routes={router}/>,
    document.getElementById("container")
)

