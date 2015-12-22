var React = require("react"),
    ReactDOM = require("react-dom");

var RegisterUserForm = React.createClass({
    getInitialState:function(){
        return
        ({
            emailmessage: '',
            emailColor: ''
        });
        
    },
    handleChange:function(){
        this.props.onUserInput(
        this.refs.emailInput,
        this.refs.passwordInput)
            
        }
    }
    validateEmail:function(){
         var message;
    if(emailInput.length < 3){
        this.setState({
            emailmessage:'username is too short, must be at least 3 characters',
            emailColor:'notValid'
        });
    }
        else if(emailInput !== emailInputRepeat){
            this.setState({
                emailmessage:'you have not entered two identical emailaddresses',
                emailColor:'valid'
            });
            
        }
        else{
        this.setState({
            emailmessage:'ok',
            emailColor:'valid'
        });
        }
        
    },
    render:function(){
        
        return(
            <div>
             <div className="col-1-4 "></div>
            
            <div className="col-1-4 registerForm">
                    <h3>Add your details:</h3>
                    <form>
                    <legend htmlFor="email">Your email</legend>
                        <input
                            name="email"
                            type="email"
                            ref="emailInput"
                            className={this.state.emailColor}
                            onBlur={this.validateEmail}
                            onChange={this.handleChange}
            
            />
                        <legend htmlFor="email">Type your email again</legend>
                        <input
                            name="email"
                            type="email"
                            ref="emailInputRepeat"
                            className={this.state.emailColor}
                            onChange={this.validateEmail}
                        />
                        
                        <p>{this.state.emailmessage}</p>

                        <legend htmlFor="password">Password</legend>
                        <input
                            name="password"
                            type="password"
                            ref="passwordInput"
                        />
                        <legend htmlFor="passwordRepeat">Type your password again</legend>
                        <input
                            name="password"
                            type="password"
                            ref="passwordRepeatInput"

                        />
                </form></div></div>
            
        )
        
        
    }
    
});

module.exports = RegisterUserForm;