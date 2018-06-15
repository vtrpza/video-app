import React, { Component } from 'react'

export default class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({term: event.target.value});
    }

    handleSubmit(event) {
        this.props.onSearchTermChange(this.state.term);
        event.preventDefault();
    }

    render() {
        return (
            <div className='search-bar'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        value={this.state.term}
                        onChange={this.handleChange}
                    />
                    <input
                        className='submit' 
                        type="submit"
                        value="Search"
                    />
                </form>
            </div>
        );
    }
};
