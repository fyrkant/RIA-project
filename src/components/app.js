var React = require("react"),
Link = require('react-router').Link;


var App = React.createClass({
        render: function () {
            return (
                    <nav className="navbar">
                        <div className="navbar-header">
                            <Link to="/login">Login</Link>
                            <Link to="/home">Home</Link>
                            <Link to="/newThing">NewThing</Link>
                            <Link to="/register">Register</Link>
                            {this.props.children}
                        </div></nav>
                  );
        }
    });

module.exports = App;


