import React from 'react';
import { ReactSVG } from 'react-svg';
import { useQuery, useMutation  } from '@apollo/client';
import { ADD_ANIME } from '../../utils/mutations';



const AddToMyList = ({animeId}) => {

    const [addAnime] = useMutation(ADD_ANIME);
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
            <button onClick={handleClick}> Add to Favorites </button>
        </>
    )
};

export default AddToMyList;