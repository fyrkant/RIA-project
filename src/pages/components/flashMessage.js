
var React = require('react');

var FlashMessage = React.createClass({

    render(){
   return(
       <div className={this.props.validClass}>
           {this.props.message}
        </div>
   );
    }
});
module.exports = FlashMessage;