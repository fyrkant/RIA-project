var React = require("react"),
    ReactDOM = require("react-dom");

var RegisterUserForm = React.createClass({
    getInitialState: function () {
        return {
            emailmessage: '',
            emailColor: '',
            emailValid:false,
            passwordmessage: '',
            passwordColor: '',
            passwordValid:'false'
        };

    },

        validateEmail:function(){
         if(this.refs.emailInput.value!==this.refs.emailInputRepeat.value){
            this.setState({
                emailmessage:'Emails does not match',
                emailColor:'notValid'
            });
        }
            else{
            this.setState({
                emailmessage:'ok',
                emailColor:'valid',
                emailValid:true
            });
            }
        },
    validatePasswords:function(){
        if(this.refs.passwordInput.value.length < 6){
            this.setState({
                passwordmessage:'Password must be longer than 6 characters!',
                passwordColor:'notValid'
            });
        }
        else if(this.refs.passwordInput.value !== this.refs.passwordInputRepeat.value){
            this.setState({
                passwordmessage:'Passwords does not match',
                passwordColor:'notValid'
            })
        }
        else{
            this.setState({
                emailmessage:'',
                passwordmessage:'ok',
                passwordColor:'valid',
                passwordValid:true
            });
        }
    },
    handleChange:function(){
        this.props.onUserInput(
            this.refs.emailInput.value,
            this.refs.passwordInput.value, 
            this.state.emailValid, 
            this.state.passwordValid
            )
    },
    render: function () {
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
                    
                    <p> {this.state.passwordmessage} </p> 
                </form> 
                    {this.props.children} 
            </div>
        </div>    
        );
    }
});

module.exports = RegisterUserForm;
