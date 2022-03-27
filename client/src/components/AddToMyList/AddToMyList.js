import React from 'react';
import { ReactSVG } from 'react-svg';
import { useQuery, useMutation  } from '@apollo/client';
import { ADD_ANIME } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import {ReactComponent as Favoritesbtn} from './favorite-bookmark-svgrepo-com.svg';
import './addtomylist.css';



const AddToMyList = ({animeId, favorite}) => {


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

    console.log(favorite);

    return(
        <>
            {(favorite) ? ('') : (<a className="btn-floating waves-effect waves-light light-blue accent-1 top-right" onClick={handleClick}><i className="material-icons">bookmark_border</i></a>)}
            
        </>
    )
};

export default AddToMyList;