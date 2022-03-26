import React from 'react';

// TODO: finish routes for searching Backend anime

const SearchBox = (props) => {
	return (
        <form class="col s12">
            <div class="row">
                <div className="search-wrapper focused">
                    <input id="search" placeholder="Type to search..."><i className="material-icons">search</i></input>
                    <label for="search">Find an Anime: </label>
                </div>
            </div>
        </form>
	);
};

export default SearchBox;