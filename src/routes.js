
var React = require('react'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    Router = ReactRouter.Router,
    IndexRoute = ReactRouter.IndexRoute,
    app = require('./pages/app'),
    home = require('./pages/home'),
    login = require('./pages/login'),
    newThing = require('./pages/newThing'),
    firebase = require('./pages/playingwithfirebase'),
    register = require('./pages/register/register');

var routes = (
    <Router>
        <Route path="/" component={app}>
            <IndexRoute component={home} />
            <Route path="login" component={login} />
            <Route path="newThing" component={newThing} />
            <Route path="home" component={home} />
            <Route path="firebase" component={firebase} />
            <Route path="register" component={register} />
        </Route>
    </Router>

);

module.exports = routes;


