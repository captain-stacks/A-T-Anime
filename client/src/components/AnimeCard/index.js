import React, { useState } from "react";

import AddToMyList from "../AddToMyList/AddToMyList";
import RemoveFromList from "../RemoveFromList";
import { UPDATE_SCORE } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import $ from "jquery";
import Auth from '../../utils/auth';

export default function AnimeCard(props) {

    const [ animeScore, setAnimeScore ] = useState(props.score);

    const[seletedSection, setSelectedSection] = useState();

    const [updateScore] = useMutation(UPDATE_SCORE, {
        refetchQueries: [
          QUERY_ME, // DocumentNode object parsed with gql
          'Me' // Query name
        ],
      });
    



    const handleupdateScore = async event => {
        event.preventDefault();
        $("#selectedScoreCircle").focus().blur();
        
        let i = parseInt(animeScore);

        if (!i) {
            setAnimeScore(props.score)
            return;
        }

        try {
            await updateScore({
                variables: { score: i, myAnimeId: props.myAnimeId },
            });
        } catch (e) {
            console.error(e);
        }
    }


    const scoreCheck = () => {
        if (props.score) {
            if (props.userParam){
                return <div className="div-score-lable circle">{animeScore}</div>;
            } 
        }

        if (!props.userParam && props.page === "profile") {
            return <input onClick={() => setSelectedSection(props.myAnimeId)} id={(seletedSection === props.myAnimeId) ? ("selectedScoreCircle") : ('')} name="scoreinput" min="1" max="10" type="number" className="score-lable circle" value={(animeScore ? (animeScore) : (''))} onChange={e => setAnimeScore(e.target.value)} />;
        }
        
    }



    return (
        <li className="btn-anime col s12 m6 l3 ">
            <form name="scoreform" onSubmit={handleupdateScore} className="from-score">
            <div className=" card">
                <div className="">
                    <div className="project-label2">
                    {(!props.userParam)?((!props.noRemove)?(<RemoveFromList animeId={props.animeId}/>):('')): ('')}
                    </div>
                </div>
                <div className="anime-card card-image favAnimeImg">
                    <img className="anime-img card medium responsive-imgfavAnimeImg anime-card-height" alt="" src={props.image} />
                    <a href={props.image} className="favAnimeContainer">
                        <h3 className="">
                            <div className="anime-title center-align">
                                {props.title}
                            </div>
                        </h3>
                    </a>
                </div>
                <div className="project-label circle">
                    <AddToMyList animeId={props.animeId} favorite={props.favorite} />
                </div>
                {scoreCheck()}
            </div>
            </form>
        </li>
    )
}