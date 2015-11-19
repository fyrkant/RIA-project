
var React = require("react"),
    ReactDOM = require("react-dom"),
    Router = require('react-router').Router,
    IndexRoute = Router.IndexRoute,
    routes = require('./routes.js');



ReactDOM.render(
        <Router routes={routes}/>,
    document.getElementById("container")
);