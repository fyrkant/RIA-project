
//dbSchema={
//username:string, 45 characters, required
//password:string, +6 characters, required, must match passwordRepeat
//name:string, 45 characters, required
//email:string, check with regex, required
//telephone:string, max 20 characters, optional
//postcode:string, check with api, required
//    }
var validationFunctions = {
    validatePasswords:function (password, passwordRepeat) {
    var message;
    if (password.length < 6) {
        message = 'password too short';
    }
    else if (password === passwordRepeat) {
        message = 'passwords match!';
    }
    else {
        message = 'passwords don\'t match';
    }
    return message;
},
validatePostcode:function(postcode) {
    $.ajax({
        url:'https://api.bring.com/shippingguide/api/postalCode.json?clientUrl=localhost:8080&country=SE&pnr='+postcode,
        dataType:'json',
        success:function(result) {
            var postcodeCity = '';
            result.valid == true ? postcodeCity = result.result : postcodeCity == "You entered an unvalid postcode, please try again"
            console.log(postcodeCity);
            return postcodeCity;
        },
        error:function(xhr, status, err){
            console.error(err.toString());
            return "you have entered an false postcode";
        }
    });
},
validateUsername:function (userName) {
    var message;
    if(userName.length <3){
        message = 'username is too short, must be at least 3 characters'
    }
    //else if(check firebase if username is already taken){
    //    message = 'username is already taken';
    //}
    else{
        message = 'ok';
    }
    return message;
},
    validateName:function (name) {
}

}

module.exports = validationFunctions;