var React = require("react"),
    Firebase = require("firebase"),
    RegisterForm = require("./components/registerForm.js"),
    config = require("../../utils/config.js");

var RegisterUserPage = React.createClass({
    saveChange(email, password) {
        let ref = new Firebase(config.fb);

        ref.createUser({
            email: email,
            password: password
        }, (error, userData) => {
            if (error) {
                console.log("Error creating user", error);
            } else {
                console.log("Successfully created user accound with uid:", userData.uid);
            }
        });
    },
    render() {
        return (
            <div>
                <div className = "col-1-4 " > </div>
                <div className = "col-1-4 registerForm">
                    <RegisterForm
                        onSave={this.saveChange}
                    />
                </div>
            </div>
        );
    }
});

module.exports = RegisterUserPage;