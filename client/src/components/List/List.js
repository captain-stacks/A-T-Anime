import React from 'react';
import Searchbox from '../SearchBox/Searchbox';
import AnimeCard from '../AnimeCard/index';
import 

return (
    <div className="container-fluid movie-app">
        <div className="row">
            <div className="col">
                <h1>Anime</h1>
                <Searchbox />
            </div>
            <AnimeCard anime={anime} />
            <div>
            // TODO: add route info for back end here and above
                <List userList={List} />
            </div>
        </div>
    </div>
)

