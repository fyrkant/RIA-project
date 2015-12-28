var React = require("react"),
    ReactDOM = require("react-dom");

var RegisterUserForm = React.createClass({
    getInitialState() {
        return {
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
                emailmessage:'',
                passwordmessage:'ok',
                passwordColor:'valid',
                buttondisabled:this.state.emailColor==="valid"?false:true
            });
        }
    },
    handleChange(){
        this.props.onUserInput(
            this.refs.emailInput.value,
            this.refs.passwordInput.value 
        )
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
                    
                    <p> {this.state.passwordmessage} </p> 
                </form> 
                    {this.props.children} 
            </div>
        </div>    
        );
    }
});

module.exports = RegisterUserForm;
