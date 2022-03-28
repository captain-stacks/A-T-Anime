import React, { useState } from 'react';
import AnimeCard from "../components/AnimeCard";
import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { Query_Anime_By_Search, QUERY_ME } from '../utils/queries';

const AllAnime = () => {
    const [page, setPage] = useState(1);
    const [input, setInput] = useState('');
    const [searchedTitle, setSearchedTitle] = useState('');

    const { loading, data } = useQuery(Query_Anime_By_Search, {
        variables: {
            page: page,
            title: searchedTitle
        }
    });

    const animes = data?.getAnimeBySearch || [];

    const meRes = useQuery(QUERY_ME);
    const myAnime = meRes.data?.me?.myAnime || [];



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

        setPage(1);

/*         if (!input) {
            return false;
        } */

        handleSearch(input);
    }

    const favoriteCheck = (anime) => {
        myAnime.map(myanime => {
            if (myanime.anime._id == anime._id) {
                favorite = true;
            }    
        })
    }



    let i = 0;
    let favorite = false;

    const addToI = () => {
        i = i + 1
    }


    return (
        <div className="">
            <form className="col s12" onSubmit={handleFormSubmit}>
                <div className="row">
                    <div className="search-wrapper focused container px-5">
                        <input autoComplete="off" id="search" placeholder="Type to search user..." value={input} onChange={e => setInput(e.target.value)}></input>
                        <label htmlFor="search">Find an Anime: </label>
                    </div>
                </div>
            </form>
            <div className="container">
                <ul className='row'>
                    {
                        animes.map(anime => (
                            <div key={anime._id}>
                                {(i >= 52) ? ('') : (
                                    <div>
                                        {addToI()}
                                        {favoriteCheck(anime)}
                                        {(!Auth.loggedIn()) ? (favorite = true) : ('')}
                                        <AnimeCard
                                            title={anime.romajiTitle}
                                            description={anime.description}
                                            image={anime.coverImageLarge}
                                            animeId={anime._id}
                                            favorite={favorite}
                                            noRemove={true}
                                        />
                                        {favorite = false}
                                    </div>
                                )}
                            </div>
                        ))
                    }
                </ul>
            </div>
            <div className="center-align pb-4">
                <h4>
                    <button className="waves-effect waves-orange btn-large btn-orange" onClick={prev} disabled={page === 1}>
                        Previous page
                    </button>
                    <span className="pr-3">
                        {page}
                    </span>
                    <button className="waves-effect waves-orange btn-large btn-orange ml-1" onClick={next} disabled={animes.length < 53}>
                        Next page
                    </button>
                </h4>
            </div>
        </div>
    );
};

export default AllAnime;