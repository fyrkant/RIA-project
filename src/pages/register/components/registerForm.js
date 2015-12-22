var React = require("react"),
    ReactDOM = require("react-dom");


var RegisterUserForm = React.createClass({
    handleChange: function(){
        if(this.validateAll()){
            this.props.onUserInput(
                this.refs.emailInput.value,
                this.refs.passwordInput.value
            );
        }
    },
    validateAll:function(){
        if(this.refs.passwordInput.value == this.refs.passwordRepeatInput.value && this.refs.emailInput.value === this.refs.emailInputRepeat.value ){
            return true;
        }
        else{
            return false;
        }
    },
    render: function () {
        return (
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
                            onChange={this.handleChange}
                        />
                        <legend htmlFor="email">Type your email again</legend>
                        <input
                            name="email"
                            type="email"
                            ref="emailInputRepeat"

                        />

                        <legend htmlFor="password">Password</legend>
                        <input
                            name="password"
                            type="password"
                            ref="passwordInput"
                            onBlur={this.checkPasswordMatch}
                            onChange={this.handleChange}
                        />
                        <legend htmlFor="passwordRepeat">Type your password again</legend>
                        <input
                            name="password"
                            type="password"
                            ref="passwordRepeatInput"
                            onBlur={this.checkPasswordMatch}
                            onChange={this.handleChange}
                        />
                        <p>{this.passwordmessage}</p>

                    </form>
                </div>
            </div>
        );
    }
});

module.exports = RegisterUserForm;