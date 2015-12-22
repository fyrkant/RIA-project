/**
 * Created by Angamanga on 19/11/2015.
 */

var React = require("react"),
    ReactDOM = require("react-dom"),
    //Firebase = require("firebase"),
    //config = require("./../../utils/config.js"),
    RegisterForm = require("./components/registerForm.js"),
    SubmitButton = require("./components/submitButton.js"),
    PreviewRegisterDetails = require("./components/previewComponent.js");

var RegisterUserPage = React.createClass({
getInitialState: function() {
        return {
            usernameText: '',
            nameText:'',
            emailText:'',
            telephoneText:'',
            postcodeText:''
        };
    },
    handleUserInput: function(usernameInput, nameInput,emailInput,telephoneInput,postcodeInput, passwordInput, passwordRepeatInput) {
        this.setState({
            usernameText: usernameInput,
            nameText:nameInput,
            emailText:emailInput,
            telephoneText:telephoneInput,
            postcodeText:postcodeInput,
            password:passwordInput,
            passwordRepeat:passwordRepeatInput
        });
    },
    render:function(){
        return (
            <div>
                <RegisterForm
                    onUserInput={this.handleUserInput}
                    usernameInput={this.state.usernameText}
                    nameInput={this.state.nameText}
                    emailInput={this.state.emailText}
                    telephoneInput={this.state.telephoneText}
                    postcodeInput={this.state.postcodeText}
                    password={this.state.passwordInput}
                    passwordRepeatInput={this.state.passwordRepeat}
                />
                <PreviewRegisterDetails
                    usernameText={this.state.usernameText}
                    nameText={this.state.nameText}
                    emailText={this.state.emailText}
                    telephoneText={this.state.telephoneText}
                    postcodeText={this.state.postcodeText}
                    password={this.state.password}
               >
                    <SubmitButton
                    usernameText={this.state.usernameText}
                    nameText={this.state.nameText}
                    emailText={this.state.emailText}
                    telephoneText={this.state.telephoneText}
                    postcodeText={this.state.postcodeText}
                    password={this.state.password}
                />
                </PreviewRegisterDetails>
            </div>
        );
    }
});
module.exports = RegisterUserPage;