
var React = require('react'),
   ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    login = require('./login'),
    home = require('./home'),
    newThing = require('./newThing');


//start here!
module.exports = (
    <Route path="/" component={home}>
    <IndexRoute component = {home} />
    <Route path="/newThing" component={newThing} />
    <Route path="/login" component={login} />
    </Route>
);
