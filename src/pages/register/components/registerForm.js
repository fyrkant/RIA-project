var React = require("react"),
    ReactDOM = require("react-dom"),
    SubmitButton = require("./submitButton.js");


var RegisterUserForm = React.createClass({
    getInitialState() {
        return {
            emailInput:'',
            passwordInput:'',
            emailmessage: '',
            emailColor: '',
            passwordmessage: '',
            passwordColor: '',
            buttondisabled:true
        };

    },

        validateEmail(){
         if(this.refs.emailInput.value!==this.refs.emailInputRepeat.value){
            this.setState({
                emailmessage:'Emails does not match',
                emailColor:'notValid',
                buttondisabled:true
            });
        }
            else{
            this.setState({
                emailInput:this.refs.emailInput.value,
                emailmessage:'ok',
                emailColor:'valid',
                buttondisabled:this.state.passwordColor==="valid"?false:true
            });

            }
        },
    validatePasswords(){
        if(this.refs.passwordInput.value.length < 6){
            this.setState({
                passwordmessage:'Password must be longer than 6 characters!',
                passwordColor:'notValid',
                buttondisabled:true
            });
        }
        else if(this.refs.passwordInput.value !== this.refs.passwordInputRepeat.value){
            this.setState({
                passwordmessage:'Passwords does not match',
                passwordColor:'notValid',
                buttondisabled:true
            })
        }
        else{
            this.setState({
                passwordInput:this.refs.passwordInput.value,
                emailmessage:'ok',
                passwordmessage:'ok',
                passwordColor:'valid',
                buttondisabled:this.state.emailColor==="valid"?false:true
            });
        }
    },
    render() {
        return ( 
            <div>
            <div className = "col-1-4 " > < /div>
            <div className = "col-1-4 registerForm">
                <h3> Add your details: </h3> 
                <form>
                    <legend htmlFor = "email"> Your email </legend> 
                    <input 
                    name = "email"
                    type = "email"
                    ref = "emailInput"
                    className = {this.state.emailColor}
                    /> 
            
                    <legend htmlFor = "email"> Type your email again </legend> 
                    <input 
                    name = "email"
                    type = "email"
                    ref = "emailInputRepeat"
                    className = {this.state.emailColor}
                    onBlur={this.validateEmail}
                    onChange={this.handleChange}
                    />
            
                    <p> {this.state.emailmessage} </p> 
                    <legend htmlFor = "password" > Password < /legend> < input name = "password"
                    type = "password"
                    ref = "passwordInput"
                    className = {this.state.passwordColor}
                    /> 
            
                    <legend htmlFor = "passwordRepeat"> Type your password again </legend> 
                    <input name = "password"
                    type = "password"
                    ref = "passwordInputRepeat"
                    className = {this.state.passwordColor}
                    onBlur={this.validatePasswords}
                    onChange={this.handleChange}
                    /> 
            
                </form> 
            
            </div>
    <SubmitButton 
                    email={this.state.emailInput}
                    password={this.state.passwordInput}
                    buttondisabled={this.state.buttondisabled}
                    />
            </div>
        );
    }
});

module.exports = RegisterUserForm;
