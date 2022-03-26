import React, { useState } from 'react';
import AnimeCard from "../components/AnimeCard"

import { useQuery } from '@apollo/client';
import { Query_Anime_By_Search } from '../utils/queries';

const AllAnime = () => {

    const [ page, setPage ] = useState(1);
    const [ input, setInput ] = useState('');
    const [ searchedTitle, setSearchedTitle ] = useState('');

    const { loading, data } = useQuery(Query_Anime_By_Search, {
        variables: { 
            page: page, 
            title: searchedTitle 
        }
    });

    const animes = data?.getAnimeBySearch || [];

    const next = () => {
        setPage(page + 1);
    }

    const prev = () => {
        setPage(page - 1);
    }

    const handleSearch = async query => {
        setSearchedTitle(input);
    }

    const handleFormSubmit = event => {
        event.preventDefault();

        if (!input) {
            return false;
        }

        handleSearch(input);
    }


    return (
        <div className="">
            <form className="col s12" onSubmit={handleFormSubmit}>
                <div className="row">
                    <div className="search-wrapper focused">
                        <input id="search" placeholder="Type to search user..." value={input} onChange={e => setInput(e.target.value)}></input>
                        <label htmlFor="search">Find a Anime: </label>
                    </div>
                    <button type="submit"></button>
                </div>
            </form>
            <ul className='row'>
                {
                    animes.map(anime => (
                        <AnimeCard
                            key={anime._id}
                            title={anime.romajiTitle}
                            description={anime.description}
                            image={anime.coverImageLarge}
                        />
                    ))
                }
            </ul>
            <button onClick={prev} disabled={page === 1}>Previous page</button><span>{page}</span><button onClick={next}>Next page</button>
        </div>
    );
};

export default AllAnime;