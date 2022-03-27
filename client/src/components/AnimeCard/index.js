import React from "react";
import { ReactSVG } from 'react-svg';
import AddToMyList from "../AddToMyList/AddToMyList";

export default function AnimeCard(props) {

    return (
        <li className="btn-anime col s12 m6 l3 ">
            <div className="card">
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
                <div className="collapsible">
                    <AddToMyList animeId={props.animeId} favorite={props.favorite} />
                </div>
            </div>
        </li>
    )
}