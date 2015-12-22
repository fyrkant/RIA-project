

var React = require("react"),
    ReactDOM = require("react-dom"),
  //  Firebase = require("firebase"),
    config = require("./../../../utils/config.js"),
    SubmitButton = require("./submitButton.js");

var RegisterPreview = React.createClass({
    //add map instead of postcode
    render:function(){
        return (<div className="col-1-4 registerPreview">
                <h3>Your details, preview:</h3>
                <p>username: {this.props.usernameText}
                </p>
                <p>name: {this.props.nameText}</p>
                <p>email: {this.props.emailText}</p>
                <p>telephone: {this.props.telephoneText}</p>
                <p>postcode: {this.props.postcodeText}</p>
                <p>password:{this.props.password}</p>
                {this.props.children}
            </div>
        )
    }
});

module.exports = RegisterPreview;

