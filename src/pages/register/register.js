var React = require("react"),
    ReactDOM = require("react-dom"),
    RegisterForm = require("./components/registerForm.js"),
    SubmitButton = require("./components/submitButton.js");

var RegisterUserPage = React.createClass({
getInitialState:function(){
   return{  email:'',
            password:'',
            emailValid:false,
            passwordValid:false
         };
},
      handleUserInput:function(emailInput, passwordInput,emailValid,passwordValid)
  {
        this.setState({
            email: emailInput,
            password: passwordInput,
            emailValid:emailValid,
            passwordValid:passwordValid
        });
    },
    render:function(){  
        return(
        <div>
            <RegisterForm 
            onUserInput={this.handleUserInput}
            >
            <SubmitButton 
            email={this.state.email}
            password={this.state.password}
            emailValid={this.state.emailValid}
            passwordValid={this.state.passwordValid}
            />
            
            </RegisterForm>
            
            </div>
        );
    }
});

module.exports = RegisterUserPage;