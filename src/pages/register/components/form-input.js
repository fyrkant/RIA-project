var React = require('react');

var FormInput = React.createClass({
    getInitialState() {
        return {
            message: null
        };
    },
    validate() {
        let input = this.refs[this.props.type + "Input"];
        let repeat = this.refs[this.props.type + "InputRepeat"];

        if (input.value !== repeat.value) {
            this.setState({message: "Values do not match!"});
        } else {
            this.setState({message: "Ok!"});
        }
    },
    render() {
        return (
            <span>
                <legend htmlFor={this.props.type}>Your {this.props.type}:</legend>
                <input
                    className={this.state.message ? this.state.message === "Ok!" ? "valid" : "notValid" : ""}
                    name={this.props.type}
                    type={this.props.type}
                    ref={this.props.type + "Input"}
                />

                <legend htmlFor={this.props.type}> Type your {this.props.type} again:</legend>
                <input
                    className={this.state.message ? this.state.message === "Ok!" ? "valid" : "notValid" : ""}
                    name={this.props.type}
                    type={this.props.type}
                    ref={this.props.type + "InputRepeat"}
                    onBlur={this.validate}
                    onChange={this.validate}
                />
                <p>{this.state.message}</p>
            </span>
        );
    }
});

module.exports = FormInput;