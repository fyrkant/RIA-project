
var React = require("react"),
    ReactDOM = require("react-dom");

var NewAdvertForm = React.createClass({
    handleChange: function() {
            this.props.onUserInput(
            this.refs.titleText.value,
            this.refs.descriptionText.value,
            this.refs.nameText.value
        );
    },
        render: function() {
        return (
        <div>
        <form>
            <legend for="title">Titel</legend>
            <input
                name="title"
                type="text"
                ref="titleText"
                onChange={this.handleChange}

            />
            <legend for="description">Beskrivning</legend>
            <input
                name="description"
                type="text"
                ref="descriptionText"
                onChange={this.handleChange}
            />
            <legend for="name">Ditt namn</legend>
            <input
                name="name"
                type="text"
                ref="nameText"
                onChange={this.handleChange}
            />
        </form>
        </div>
        );
    }
});

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
            titleText: 'Här kommer beskrivningen av annonsen att synas',
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

ReactDOM.render(
    <RegisterAdvertPage />,
    document.getElementById('hello')
);