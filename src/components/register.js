/**
 * Created by Angamanga on 19/11/2015.
 */

var React = require("react"),
    ReactDOM = require("react-dom"),
    Firebase = require("firebase"),
    config = require("./config.js");


var RegisterUserForm = React.createClass({
       passwordmessage:'',
       handleChange: function() {
            this.props.onUserInput(
            this.refs.usernameInput.value,
            this.refs.nameInput.value,
            this.refs.emailInput.value,
            this.refs.telephoneInput.value,
            this.refs.postcodeInput.value
       )
    },
    checkPasswordMatch:function(){
      if(this.refs.passwordInput.value ===this.refs.passwordRepeatInput.value){
          this.passwordmessage = 'passwords match!';
            }
                else{
                this.passwordmessage = 'passwords don\'t match, please try again!';
            }
            },
// set
    ////saveChange: function (e) {
    //    e.preventDefault();
    //    var rootRef = new Firebase(config.fb);
    //    var usersRef = rootRef.child('Thing');
    //    var val = {Title:this.props.titleText};
    //    usersRef.push(val);
    //},
    render: function () {
        //validate postcodeInput
        //validate passwords
        return (
            <div>
                <div className="col-1-4 "></div>
                <div className="col-1-4 registerForm">
                <h3>Add your details:</h3>
                    <form>
                <legend htmlFor="username">Username</legend>
                <input
                    name="username"
                    type="text"
                    ref="usernameInput"
                    onChange={this.handleChange}
                />
                <legend htmlFor="password">Password</legend>
                <input
                name="password"
                type="password"
                ref="passwordInput"
                onChange={this.checkPasswordMatch}
                />

                <legend htmlFor="passwordRepeat">Password</legend>
                <input
                name="password"
                type="password"
                ref="passwordRepeatInput"
                onChange={this.checkPasswordMatch}
                />
                 <p>{this.passwordmessage}</p>

                <legend htmlFor="name">Your Name</legend>
                <input
                    name="name"
                    type="text"
                    ref="nameInput"
                    onChange={this.handleChange}
                />
                <legend htmlFor="email">Your email</legend>
                <input
                    name="email"
                    type="email"
                    ref="emailInput"
                    onChange={this.handleChange}
                />
                <legend htmlFor="telephone">Your telephone number</legend>
                <input
                    name="telephone"
                    type="text"
                    ref="telephoneInput"
                    onChange={this.handleChange}
                />
                <legend htmlFor="postcode">Your postcode</legend>
                 <input
                    name="postcode"
                    type="number"
                    ref="postcodeInput"
                    onChange={this.handleChange}
                 />

            </form>
                    </div>
        </div>
                )
    }
});


var SubmitButton = React.createClass({
    render:function(){
        return(
            <div>
                <p>Like what you see? Please</p>
                <input
                    type="submit"
                    value="register"
                    className="btn btn-default"
                    onClick={this.saveChange}
                />
            </div>
        )
    }
})



var RegisterPreview = React.createClass({
    //add map instead of postcode
    render:function(){
        return (<div className="col-1-4 registerPreview">
                <h3>Your details, preview:</h3>
                <p>username: {this.props.usernameText}</p>
                <p>name: {this.props.nameText}</p>
                <p>email: {this.props.emailText}</p>
                <p>telephone: {this.props.telephoneText}</p>
                <p>postcode: {this.props.postcodeText}</p>
                <SubmitButton />
            </div>
        )
    }
})

var RegisterUserPage = React.createClass({
getInitialState: function() {
        return {
            usernameText: '',
            nameText:'',
            emailText:'',
            telephoneText:'',
            postcodeText:''
        };
    },
    handleUserInput: function(usernameInput, nameInput,emailInput,telephoneInput,postcodeInput, passwordInput, passwordRepeatInput) {
        this.setState({
            usernameText: usernameInput,
            nameText:nameInput,
            emailText:emailInput,
            telephoneText:telephoneInput,
            postcodeText:postcodeInput,
            password:passwordInput,
            passwordRepeat:passwordRepeatInput
        });
    },
    render:function(){
        return (
            <div>
                <RegisterUserForm
                    onUserInput={this.handleUserInput}
                    usernameInput={this.state.usernameText}
                    nameInput={this.state.nameText}
                    emailInput={this.state.emailText}
                    telephoneInput={this.state.telephoneText}
                    postcodeInput={this.state.postcodeText}
                    passwordInput={this.state.password}
                    passwordRepeatInput={this.state.passwordRepeat}
                />
                <RegisterPreview
                    usernameText={this.state.usernameText}
                    nameText={this.state.nameText}
                    emailText={this.state.emailText}
                    telephoneText={this.state.telephoneText}
                    postcodeText={this.state.postcodeText}
                />
            </div>
        );
    }
});
module.exports = RegisterUserPage;