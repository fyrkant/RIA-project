/**
 * Created by Angamanga on 07/12/2015.
 */

var React = require("react"),
    ReactDOM = require("react-dom"),
    Firebase = require("firebase"),
    config = require("./../../../utils/config.js");

var SubmitButton = React.createClass({
 //set
//    saveChange: function () {
//    var email=this.props.emailText;
//        var password=this.props.password;
//        console.log(email);
//        console.log(password);
//        var ref = new Firebase(config.fb);
//      ref.createUser({
//          email:email,
//          password:password,
//          extra:'Extra'
//      },
//      function(error, userData){
//          "use strict";
//          if(error){
//              console.log("Error creating user", error);
//          } else{
//              console.log("Successfully created user accound with uid:". userData.uid);
//          }
//      });
//    },

    render:function(){
        return(
            <div>
                <input
                    type="submit"
                    value="register"
                    className="btn btn-default"
//                    onClick={this.saveChange}
                />
            </div>
        )
    }
});

module.exports = SubmitButton;