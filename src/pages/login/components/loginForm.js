var React = require("react");

var LoginForm = React.createClass({
    handleSubmit(e){
        e.preventDefault();
        let email = this.refs.emailInput.value;
        let password = this.refs.passwordInput.value;
        this.props.onLogin(email, password);
    },
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                    <h3> Sign in:</h3>
                    <legend htmlFor="email">Your email:</legend>
                    <input
                        name="email"
                        type="email"
                        ref="emailInput"
                    />

                    <legend htmlFor="password">Password</legend>
                    <input
                        name="password"
                        type="password"
                        ref="passwordInput"
                    />

                    <input
                        type="submit"
                        value="sign in"

                    />
            </form>
        )
}
});

module.exports = LoginForm;