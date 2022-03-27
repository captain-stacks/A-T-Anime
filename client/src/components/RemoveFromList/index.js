import React from 'react';
import { ReactSVG } from 'react-svg';
import { useQuery, useMutation  } from '@apollo/client';
import { REMOVE_ANIME } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import $ from "jquery";


const RemoveFromList = ({animeId}) => {
    
    const [removeAnime] = useMutation(REMOVE_ANIME, {
        refetchQueries: [
            QUERY_ME,
            'Me'
        ],
    });
    const handleClick = async event => {

        $(event.target).css("display", "none");

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
            <a className="btn-floating red darken-4 waves-effect waves-light top-right" onClick={handleClick}><i className="material-icons">delete_forever</i></a>
        </>
    )
};

export default RemoveFromList;