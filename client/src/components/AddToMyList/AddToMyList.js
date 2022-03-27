import React from 'react';
import { ReactSVG } from 'react-svg';
import { useQuery, useMutation  } from '@apollo/client';
import { ADD_ANIME } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import {ReactComponent as Favoritesbtn} from './favorite-bookmark-svgrepo-com.svg';



const AddToMyList = ({animeId}) => {

    const [addAnime] = useMutation(ADD_ANIME, {
        refetchQueries: [
            QUERY_ME,
            'Me'
        ],
    });
    const handleClick = async() =>{
        try{
            await addAnime ({
                variables: {animeId: animeId}
            })
        } catch (e){
            console.error(e);
        }
    };

    return(
        <>
            <button className="btn bottom-right" onClick={handleClick}><Favoritesbtn /></button>
        </>
    )
};

export default AddToMyList;