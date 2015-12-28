var React = require("react"),
    ReactDOM = require("react-dom"),
    RegisterForm = require("./components/registerForm.js"),
    SubmitButton = require("./components/submitButton.js");

var RegisterUserPage = React.createClass({
getInitialState:function(){
   return{  email:'',
            password:''
         };
},
      handleUserInput:function(emailInput, passwordInput)
  {
        
      this.setState({
            email: emailInput,
            password: passwordInput
      });
    },
    render:function(){  
        console.log(this.props.buttondisabled);
        return(
        <div>
            <RegisterForm 
            onUserInput={this.handleUserInput}
            >
            <SubmitButton 
            email={this.state.email}
            password={this.state.password}
            emailValid={this.state.emailValid}
            buttondisabled={this.state.buttondisabled}
            />
            
            </RegisterForm>
            
            </div>
        );
    }
});

module.exports = RegisterUserPage;