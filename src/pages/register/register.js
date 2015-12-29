var React = require("react"),
    Firebase = require("firebase"),
    RegisterForm = require("./components/registerForm.js"),
    FlashMessage = require("../components/flashMessage.js"),
    config = require("../../utils/config.js");

var RegisterUserPage = React.createClass({
    getInitialState(){
        return {
        validClass:'',
        message:''
        }
    },
    saveChange(email, password) {
        var component = this;
        let ref = new Firebase(config.fb);
        ref.createUser({
            email: email,
            password: password
        }, (error, userData) => {

            //HOW TO SET STATE FROM HERE??
                if (error) {
                    console.log(error);
                    //component.setState({
                    //    validClass: 'notValid',
                    //    message: error
                    //});
                }
                else {
                    console.log(userData);
                    //component.setState({
                    //    validClass: 'valid',
                    //    message: userData
                    //});
                }

        });
    },
    render() {
        return (
            <div>
                <div className = "col-1-4 " > </div>
                <div className = "col-1-4 registerForm">
                    <FlashMessage
                    //message={this.state.message}
                    //validClass={this.state.validClass}
                    />
                    <RegisterForm
                        onSave={this.saveChange}
                       />
                </div>
            </div>
        );
    }
});

module.exports = RegisterUserPage;