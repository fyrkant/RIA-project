var React = require("react"),
    ReactDOM = require("react-dom");

var RegisterUserForm = React.createClass({
    getInitialState: function () {
        return {
            emailmessage: '',
            emailColor: '',
            passwordmessage: '',
            passwordColor: ''
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
                emailColor:'valid'
            });
            }
            
        },
    validatePasswords:function(){
        if(this.refs.passwordInput.value !== this.refs.passwordInputRepeat.value){
            this.setState({
                emailmessage:'',
                passwordmessage:'Passwords does not match',
                passwordColor:'notValid'
            
            })
        }
        else{
            this.setState({
                emailmessage:'',
                passwordmessage:'ok',
                passwordColor:'valid'
            });
        }
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
