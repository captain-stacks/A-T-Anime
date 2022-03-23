import React, { useState } from 'react';
import AnimeCard from "../components/AnimeCard"

import { useQuery } from '@apollo/client';
import { ALL_ANIME } from '../utils/queries';

const AllAnime = () => {
    const { loading, data } = useQuery(ALL_ANIME);

    const animes = data?.allAnime || [];

    return (
        <div className="">
            <ul className='row'>
                {
                    animes.map(anime => (
                        <AnimeCard
                            title={anime.romajiTitle}
                            description={anime.description}
                            image={anime.coverImageLarge}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default AllAnime;