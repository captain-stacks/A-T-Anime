import React from 'react';
import './MyAnime.css'

const MyAnimeCard = (props) => {
    return (
    <>
        {props.anime.map((anime, index) => (
            <div className='card'>
                <img src={anime.coverImageMedium} alt= "the anime's poster"></img>
                <p>{anime.englishTitle}</p>
            </div>
        ))}
    </>
    );
};
export default MyAnimeCard;