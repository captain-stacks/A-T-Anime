import React from 'react';
import { ReactSVG } from 'react-svg';
import { useQuery, useMutation  } from '@apollo/client';
import { ADD_ANIME } from '../../utils/mutations';


const AddToMyList = () => {
    const [addAnime] = useMutation(ADD_ANIME);
    const handleClick = async() =>{
        try{
            await addAnime ({
                variables: {userId: this.user._id, anime: this.anime._id}
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