var React = require("react"),
    Firebase = require("firebase"),
    LoginForm = require("./components/loginForm.js"),
    FlashMessage = require("../components/flashMessage.js"),
    fireRef = require("../../utils/firebase.js");
//fragor:Hur skicka vidare anvandaren till dashboard?? Hur komma at authData.token efter auth? Vill ju bara kunna
//redigera annonser som hor till den inloggade anvandaren...

var LoginPage = React.createClass({
    onLogin(email, password) {
        fireRef.authWithPassword({
            email    : email,
            password : password
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);

            } else {
                console.log("Authenticated successfully with payload:", authData);
                //window.location.href = '#/newThing#/' + authData.token;
            }
        },
            { remember:"sessionOnly"
            }
        );
    },
        //getIdToken: function() {
        //     var authHash = this.lock.parseHash(window.location.hash);
        //    if (!idToken && authHash) {
        //        if (authHash.id_token) {
        //            idToken = authHash.id_token
        //            localStorage.setItem('userToken', authHash.id_token);
        //        }
        //        if (authHash.error) {
        //            console.log("Error signing in", authHash);
        //            return null;
        //        }
        //    }
        //    return idToken;
        //},
        render() {
            //if (this.state.idToken) {
            //    return <div>hej</div>;
            //} else {

        return (
            <div>
                <div className = "col-1-4 " > </div>
                <div className = "col-1-4 registerForm">
                    if
                    <LoginForm
                        onLogin={this.onLogin}
                    />
                </div>
            </div>
        );
    }
//}
    });

module.exports = LoginPage;