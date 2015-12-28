var React = require("react"),
    ReactDOM = require("react-dom"),
    RegisterForm = require("./components/registerForm.js");

var RegisterUserPage = React.createClass({
    
    render:function(){  
        return(
            <RegisterForm />
           
        );
    }
});

module.exports = RegisterUserPage;