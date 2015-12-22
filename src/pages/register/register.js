var React = require("react"),
    ReactDOM = require("react-dom"),
    RegisterForm = require("./components/registerForm.js"),
    SubmitButton = require("./components/submitButton.js");

var RegisterUserPage = React.createClass({
//   getInitialState:function(){
//        emailText:'',
//        passwordText:''
//   },
//    handleUserInput:function(emailInput, passwordInput)
//    {
//        this.setState({
//            emailText: emailInput,
//            passwordText: passwordInput
//        });
//    },
    render:function(){  
        return(
        <div>
            <RegisterForm 
//            onUserInput={this.handleUserInput}
//            emailInput={this.state.emailInput}
//            passwordInput={this.state.passwordInput}
            >
            <SubmitButton />
            
            </RegisterForm>
            
            </div>
        );
    }
});

module.exports = RegisterUserPage;