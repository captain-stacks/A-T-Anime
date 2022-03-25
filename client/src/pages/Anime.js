import React, { useState } from 'react';
import AnimeCard from "../components/AnimeCard"

import { useQuery } from '@apollo/client';
import { ALL_ANIME } from '../utils/queries';

const AllAnime = () => {

    const [ page, setPage ] = useState(1);

    const { loading, data } = useQuery(ALL_ANIME, {variables: { page: page }});

    const animes = data?.allAnime || [];

    const next = () => {
        setPage(page + 1);
    }

    const prev = () => {
        setPage(page - 1);
    }


    return (
        <div className="">
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
            <button onClick={prev} disabled={page === 1}>previous page</button><span>{page}</span><button onClick={next}>Next page</button>
        </div>
    );
};

export default AllAnime;