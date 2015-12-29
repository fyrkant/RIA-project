
var React = require('react');

var FlashMessage = React.createClass({
    clickHandler(e) {
        e.target.style.display = "none";
    },
    render() {
        let divStyles = {
            borderColor: this.props.isError ? "palevioletred" : "forestgreen",
            color: this.props.isError ? "palevioletred" : "forestgreen",
            display: "block",
            border: "solid 1px",
            margin: "3px"
        };

        return (
            <div style={divStyles} onClick={this.clickHandler}>
                {this.props.message}
            </div>
        );
    }
});

module.exports = FlashMessage;