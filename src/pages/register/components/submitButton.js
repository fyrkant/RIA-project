var React = require("react"),
    ReactDOM = require("react-dom"),
    Firebase = require("firebase"),
    config = require("./../../../utils/config.js");
//todo:tell the user if the registration was successful or not
var SubmitButton = React.createClass({

    saveChange() {
        var ref = new Firebase(config.fb);
        ref.createUser({
          email:this.props.email,
          password:this.props.password
      },
      function(error, userData){
          if(error){
              console.log("Error creating user", error);
          } else{
              console.log("Successfully created user accound with uid:");
          }
      });
    },
    render(){
        return(
            <div>
                <input
                    type="submit"
                    value="register"
                    className="btn btn-default"
                    onClick={this.saveChange}
                    disabled={this.props.buttondisabled}
                />
            </div>
        )
    }
});

module.exports = SubmitButton;