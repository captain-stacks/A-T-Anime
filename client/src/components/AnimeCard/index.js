import React from "react";
import { ReactSVG } from 'react-svg';
import AddToMyList from "../AddToMyList/AddToMyList";

export default function AnimeCard(props) {

    return (
        <li className="btn-anime col s12 m6 l4 ">
            <div className="card">
                <div className="overlay">
                    <AddToMyList animeId={props.animeId}/>
                </div>
                <div className="card-image favAnimeImg">
                    <a href={props.image} className="favAnimeContainer">
                        <h3 className="">
                            <span className="">
                                {props.title}
                            </span>
                        </h3>
                        <img className="favAnimeImg anime-card-height" alt="" src={props.image} />
                    </a>
                </div>
            </div>
        </li>
    )
}