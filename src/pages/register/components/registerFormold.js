

var React = require("react"),
    ReactDOM = require("react-dom"),
  //  Firebase = require("firebase"),
    config = require("../../../utils/config.js"),
    formvalidation = require("../../../utils/formValidation.js");

var RegisterUserForm = React.createClass({
    passwordmessage:'',
    usernamemessage:'',
    namemessage:'',
    postcodemessage:'',
    handleChange: function() {
        this.props.onUserInput(
            this.refs.usernameInput.value,
            this.refs.nameInput.value,
            this.refs.emailInput.value,
            this.refs.telephoneInput.value,
            this.refs.postcodeInput.value,
            this.refs.passwordInput.value,
            this.refs.passwordRepeatInput.value
        );
    },
    checkUsername:function(){
     this.usernamemessage = formvalidation.validateUsername(this.refs.usernameInput.value);
    },
    checkPasswordMatch:function(){
        this.passwordmessage = formvalidation.validatePasswords(this.refs.passwordInput.value, this.refs.passwordRepeatInput.value);
    },
    checkValidPostcode:function(){
        this.postcodemessage = formvalidation.validatePostcode(this.refs.postcodeInput.value);

    },
    validateInput:function(){
        "use strict";

    },

    render: function () {
        return (
            <div>
                <div className="col-1-4 "></div>
                <div className="col-1-4 registerForm">
                    <h3>Add your details:</h3>
                    <form>
                        <legend htmlFor="username">Username</legend>
                        <input
                            name="username"
                            type="text"
                            ref="usernameInput"
                            onChange={this.handleChange}
                            onBlur={this.checkUsername}
                        />
                       <p> {this.usernamemessage}</p>
                        <legend htmlFor="password">Password</legend>
                        <input
                            name="password"
                            type="password"
                            ref="passwordInput"
                            onBlur={this.checkPasswordMatch}
                            onChange = {this.handleChange}
                        />
                        <legend htmlFor="passwordRepeat">Password</legend>
                        <input
                            name="password"
                            type="password"
                            ref="passwordRepeatInput"
                            onBlur={this.checkPasswordMatch}
                            onChange = {this.handleChange}
                        />
                        <p>{this.passwordmessage}</p>

                        <legend htmlFor="name">Your Name</legend>
                        <input
                            name="name"
                            type="text"
                            ref="nameInput"
                            onChange={this.handleChange}
                        />
                        <p>{this.namemessage}</p>
                        <legend htmlFor="postcode">Your postcode</legend>
                        <input
                            name="postcode"
                            type="number"
                            ref="postcodeInput"
                            onChange={this.handleChange}
                            onChange={this.checkValidPostcode}
                        />
                        <p>{this.postcodemessage}</p>
                        <legend htmlFor="email">Your email</legend>
                        <input
                            name="email"
                            type="email"
                            ref="emailInput"
                            onChange={this.handleChange}
                        />
                        <legend htmlFor="telephone">Your telephone number</legend>
                        <input
                            name="telephone"
                            type="text"
                            ref="telephoneInput"
                            onChange={this.handleChange}
                        />

                    </form>
                </div>
            </div>
        )
    }
});

module.exports = RegisterUserForm;