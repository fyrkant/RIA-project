/**
 * Created by Angamanga on 19/11/2015.
 */

var React = require("react"),
    ReactDOM = require("react-dom"),
    Firebase = require("firebase"),
    config = require("./config.js");

var NewAdvertForm = React.createClass({
    handleChange: function() {
        this.props.onUserInput(
            this.refs.titleText.value,
            this.refs.descriptionText.value,
            this.refs.nameText.value
        );
    },
    saveChange: function (e) {
        e.preventDefault();
        var rootRef = new Firebase(config.fb);
        var usersRef = rootRef.child('Thing');
        var val = {Title:this.props.titleText};
        usersRef.push(val);
    },
    render: function() {
        return (
            <div>
                <form>
                    <legend htmlFor="title">Titel</legend>
                    <input
                        name="title"
                        type="text"
                        ref="titleText"
                        onChange={this.handleChange}
                    />
                    <legend htmlFor="description">Beskrivning</legend>
                    <input
                        name="description"
                        type="text"
                        ref="descriptionText"
                        onChange={this.handleChange}
                    />
                    <legend htmlFor="name">Ditt namn</legend>
                    <input
                        name="name"
                        type="text"
                        ref="nameText"
                        onChange={this.handleChange}
                    />
                    <input
                        type="submit"
                        value="Skicka"
                        className="btn btn-default"
                        onClick={this.saveChange}
                    />
                </form>
            </div>
        );
    }
});


//var react = require('react'),
//    Firebase = require("firebase");
//
//var buttn = document.getElementById('sendTofb');
//var rootRef = new Firebase('https://angamanga.firebaseio.com');
//
//buttn.addEventListener('click', function(){
//    "use strict";
//    var currentTitle = document.getElementById('titl').value;
//    rootRef.set(currentTitle);
//})

var PreviewAdvert = React.createClass({
    render:function(){
        return (<div>
                <h1>{this.props.titleText}</h1>
                <p>{this.props.descriptionText}</p>
                <p>{this.props.nameText}</p>
            </div>
        )
    }
})

var RegisterAdvertPage = React.createClass({
    getInitialState: function() {
        return {
            titleText: 'Här kommer annonsens titel att synas',
            descriptionText:'Här kommer beskrivningen av annonsen att synas',
            nameText:'Här kommer ditt namn att synas'
        };
    },
    handleUserInput: function(titleText, descriptionText,nameText) {
        this.setState({
            titleText: titleText,
            descriptionText: descriptionText,
            nameText:nameText
        });
    },
    render:function(){
        return (
            <div>
                <NewAdvertForm
                    onUserInput={this.handleUserInput}
                    titleText={this.state.titleText}
                    descriptionText={this.state.descriptionText}
                    nameText={this.state.nameText}
                />
                <PreviewAdvert
                    titleText={this.state.titleText}
                    descriptionText={this.state.descriptionText}
                    nameText={this.state.nameText}
                />
            </div>
        )
    }
})
module.exports = RegisterAdvertPage;