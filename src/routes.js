
var React = require('react'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    Router = ReactRouter.Router,
    IndexRoute = ReactRouter.IndexRoute,
    app = require('./components/app'),
    home = require('./components/home'),
    login = require('./components/login'),
    newThing = require('./components/newThing'),
    firebase = require('./components/playingwithfirebase'),
    register = require('./components/register');

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


