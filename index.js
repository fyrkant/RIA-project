
var React = require("react"),
    ReactDOM = require("react-dom");

var HelloWorld = React.createClass({
    render: function() {
        return (
        <div>
        <h1>Hello, world!</h1>
        <h3>Its working!! What an awesome feeling!!!</h3>
        </div>
        );
    }
});

ReactDOM.render(
<HelloWorld />,
    document.getElementById('hello')
);