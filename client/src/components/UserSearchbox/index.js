import React from 'react';

const userSearchBox = (props) => {
	return (
        <form class="col s12">
            <div class="row">
                <div className="search-wrapper focused">
                    <input id="search" placeholder="Type to search user..."><i className="material-icons">search</i></input>
                    <label for="search">Find a User: </label>
                </div>
            </div>
        </form>
	);
};

export default userSearchBox;