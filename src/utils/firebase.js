var React = require("react"),
    Firebase = require("firebase");

let ref = new Firebase('https://freecycle.firebaseio.com/');

module.exports = ref;
