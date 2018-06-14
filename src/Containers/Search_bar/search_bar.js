import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class SearchBar extends Component {
    state = {
        term: ''               
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        )
    }
}
