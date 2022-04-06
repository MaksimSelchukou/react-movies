import React, { useState } from "react";

export const Search = ({ searchMovies }) => {
    // state = {
    //     search: "",
    //     type: "all",
    // }

    const [search, setSearch] = useState("");
    const [type, setType] = useState("all");

    // handleSearchInput = (event) => {
    //     this.setState({ search: event.target.value })
    // }

    const handleSearchInput = (event) => {
        setSearch(event.target.value)
    }

    // handleFilter = (event) => {

    //     this.setState(() => ({ type: event.target.dataset.type }), () => {
    //         this.props.searchMovies(this.state.search, this.state.type)
    //     })
    // }

    const handleFilter = (event) => {
        setType(() => (event.target.dataset.type));
        searchMovies(search, event.target.dataset.type);


        // setType(() => (event.target.dataset.type), () => {
        //     searchMovies(search, type)
        // })
    }

    // handleKey = (event) => {
    //     if (event.key === 'Enter')
    //         this.props.searchMovies(this.state.search, this.state.type)
    // }

    const handleKey = (event) => {
        if (event.key === 'Enter')
            searchMovies(search, type);
    }

    // handleSearch = () => {
    //     this.props.ssearchMovies(this.state.search, this.state.type)
    // }
    const handleSearch = () => {
        searchMovies(search, type)
    }



    return (

        <div className="col s12">
            <div className="input-field">
                <input
                    placeholder="search"
                    type="search"
                    className="validate"
                    value={search}
                    onChange={handleSearchInput}
                    onKeyDown={handleKey}
                />
                <button className="btn search-btn" onClick={handleSearch}>Search</button>
            </div>
            <p>
                <label>
                    <li>
                        <input
                            className="with-gap"
                            value={type}
                            checked={type === "all"}
                            name="type"
                            type="radio"
                            data-type='all'
                            onChange={handleFilter}
                        />

                        <span>All</span>
                    </li>
                </label>
                <label>
                    <li>
                        <input
                            className="with-gap"
                            value={type}
                            checked={type === "movie"}
                            name="type"
                            type="radio"
                            data-type='movie'
                            onChange={handleFilter}
                        />
                        <span>Only Films</span>
                    </li>
                </label>
                <label>
                    <li>
                        <input
                            className="with-gap"
                            value={type}
                            checked={type === "series"}
                            name="type"
                            type="radio"
                            data-type='series'
                            onChange={handleFilter} />
                        <span>Only Serials</span>
                    </li>
                </label>
            </p>

        </div >

    )
}