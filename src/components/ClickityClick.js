import React, { Component } from 'react'

export default class ClickityClick extends Component {

    state = {
        hasBeenClicked: false
    };

    handleClick = () => {
        this.setState({
            hasBeenClicked: true
        }, () => console.log(this.state.hasBeenClicked))
    };

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}
// Code ClickityClick Component Here
