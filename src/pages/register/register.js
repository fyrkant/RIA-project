var React = require("react"),
    RegisterForm = require("./components/registerForm.js"),
    FlashMessage = require("../components/flashMessage.js"),
    firebaseRef = require('../../utils/firebase');

var RegisterUserPage = React.createClass({
    getInitialState() {
        return {
            flash: null
        };
    },
    saveChange(email, password) {
        firebaseRef.createUser({
            email: email,
            password: password
        }, (error, userData) => {
            if (error) {
                console.log(error);
                this.setState({
                    flash: {
                        isError: true,
                        message: "Error!! " + error.message
                    }
                });
            } else {
                console.log(userData);
                this.setState({
                    flash: {
                        isError: false,
                        message: "User successfully saved!"
                    }
                });
            }

        });
    },
    render() {
        return (
            <div>
                <div className = "col-1-4 " > </div>
                <div className = "col-1-4 registerForm">
                    {this.state.flash ?
                        <FlashMessage
                            message={this.state.flash.message}
                            isError={this.state.flash.isError}
                        /> : ''}
                    <RegisterForm
                        onSave={this.saveChange}
                    />
                </div>
            </div>
        );
    }
});

module.exports = RegisterUserPage;