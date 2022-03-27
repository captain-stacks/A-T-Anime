import React from 'react';
import { ReactSVG } from 'react-svg';
import { useQuery, useMutation  } from '@apollo/client';
import { REMOVE_ANIME } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';


const RemoveFromList = ({animeId}) => {
    console.log(animeId);
    
    const [removeAnime] = useMutation(REMOVE_ANIME, {
        refetchQueries: [
            QUERY_ME,
            'Me'
        ],
    });
    const handleClick = async() =>{
        try{
            await removeAnime ({
                variables: {animeId: animeId}
            })
        } catch (e){
            console.error(e);
        }
    };

    return(
        <>
            <button className="btn bottom-right" onClick={handleClick}>Remove from List</button>
        </>
    )
};

export default RemoveFromList;