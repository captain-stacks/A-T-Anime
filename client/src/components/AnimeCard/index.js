import React from "react";

import AddToMyList from "../AddToMyList/AddToMyList";
import RemoveFromList from "../RemoveFromList";

export default function AnimeCard(props) {

    return (
        <li className="btn-anime col s12 m6 l3 ">
            <div className="card">
                <div className="">
                    <div className="project-label2">
                    {(!props.userParam)?((!props.noRemove)?(<RemoveFromList animeId={props.animeId}/>):('')): ('')}
                    </div>
                </div>
                <div className="card-image favAnimeImg">
                    <img className="card medium responsive-imgfavAnimeImg anime-card-height" alt="" src={props.image} />
                    <a href={props.image} className="favAnimeContainer">
                        <h3 className="">
                            <span className="center-align">
                                {props.title}
                            </span>
                        </h3>
                    </a>
                </div>
                <div className="project-label circle">
                    <AddToMyList animeId={props.animeId} favorite={props.favorite} />
                </div>
            </div>
        </li>
    )
}