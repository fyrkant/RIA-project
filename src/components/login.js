
var React = require("react"),
    ReactDOM = require("react-dom");


module.exports = React.createClass({
    render: function () {
        return (
            <h1>I am login</h1>
        )
    }
})



var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
ref.createUser({
    email    : "bobtony@firebase.com",
    password : "correcthorsebatterystaple"
}, function(error, userData) {
    if (error) {
        console.log("Error creating user:", error);
    } else {
        console.log("Successfully created user account with uid:", userData.uid);
    }
});