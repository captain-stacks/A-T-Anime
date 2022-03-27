import React from 'react';
import { useQuery, useMutation  } from '@apollo/client';
import { ADD_ANIME } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import $ from "jquery";



const AddToMyList = ({animeId, favorite}) => {


    const [addAnime] = useMutation(ADD_ANIME, {
        refetchQueries: [
            QUERY_ME,
            'Me'
        ],
    });
    const handleClick = async event =>{

        $(event.target).css("display", "none");
        
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
            {(favorite) ? ('') : (<a className="btn-floating waves-effect waves-light light-blue accent-1 top-left mylist" onClick={handleClick}><i className="material-icons">bookmark_border</i></a>)}
            
        </>
    )
};

export default AddToMyList;