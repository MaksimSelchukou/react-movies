import React from "react";

export class Search extends React.Component {
    state = {
        search: "",
        type: "all",
    }

    handleSearchInput = (event) => {
        this.setState({ search: event.target.value })
    }

    handleFilter = (event) => {

        this.setState(() => ({ type: event.target.dataset.type }), () => {
            this.props.searchMovies(this.state.search, this.state.type)
        })
    }

    handleKey = (event) => {
        if (event.key === 'Enter')
            this.props.searchMovies(this.state.search, this.state.type)
    }



    handleSearch = () => {
        this.props.searchMovies(this.state.search, this.state.type)

    }


    render() {
        return (

            <div className="col s12">
                <div className="input-field">
                    <input
                        placeholder="search"
                        type="search"
                        className="validate"
                        value={this.state.search}
                        onChange={this.handleSearchInput}
                        onKeyDown={this.handleKey}
                    />
                    <button className="btn search-btn" onClick={this.handleSearch}>Search</button>
                </div>
                <p>
                    <label>
                        <li>
                            <input
                                className="with-gap"
                                value={this.state.type}
                                checked={this.state.type === "all"}
                                name="type"
                                type="radio"
                                data-type='all'
                                onChange={this.handleFilter}
                            />

                            <span>All</span>
                        </li>
                    </label>
                    <label>
                        <li>
                            <input
                                className="with-gap"
                                value={this.state.type}
                                checked={this.state.type === "movie"}
                                name="type"
                                type="radio"
                                data-type='movie'
                                onChange={this.handleFilter}
                            />
                            <span>Only Films</span>
                        </li>
                    </label>
                    <label>
                        <li>
                            <input
                                className="with-gap"
                                value={this.state.type}
                                checked={this.state.type === "series"}
                                name="type"
                                type="radio"
                                data-type='series'
                                onChange={this.handleFilter} />
                            <span>Only Serials</span>
                        </li>
                    </label>
                </p>

            </div >

        )
    }
}