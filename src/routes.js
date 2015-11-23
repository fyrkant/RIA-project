
var React = require('react'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    Link = require('react-router').Link;


var home = React.createClass({
    render: function () {
        return (
            <h1>I am home</h1>
        )
    }
});

var login = React.createClass({
    render: function () {
        return (
            <h1>I am login</h1>
        )
    }
})

var newThing = React.createClass({
    render: function () {
        return (
            <h1>I am newThing</h1>
        )
    }
})



var routes = (
    <Router>
    <Route path="/" component={home}>
        <Route name="login" component={login} />
        <Route name="newThing" component={newThing} />
    </Route>
</Router>
        );

module.exports = routes;


