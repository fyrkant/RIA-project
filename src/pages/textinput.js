/**
 * Created by Angamanga on 24/11/2015.
 */
var NewAdvertForm = React.createClass({
    handleChange: function() {
        this.props.onUserInput(
            this.refs.titleText.value,
            this.refs.descriptionText.value,
            this.refs.nameText.value
        );
    },
    saveTitle:function(e){
        e.preventDefault();

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
                    <input type="submit" value="Skicka" className="btn btn-default" />
                </form>
            </div>
        );
    }
});