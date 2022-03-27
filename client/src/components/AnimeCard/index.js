import React from "react";
import { ReactSVG } from 'react-svg';
import AddToMyList from "../AddToMyList/AddToMyList";

export default function AnimeCard(props) {

    return (
        <li className="btn-anime col s12 m6 l3 ">
            <div className="card">
                <div className="collapsible">
                    <AddToMyList animeId={props.animeId} favorite={props.favorite} />
                </div>
                <div className="card-image favAnimeImg">
                    <a href={props.image} className="favAnimeContainer">
                        <h3 className="">
                            <span className="">
                                {props.title}
                            </span>
                        </h3>
                        <img className="responsive-imgfavAnimeImg anime-card-height" alt="" src={props.image} />
                    </a>
                </div>
            </div>
        </li>
    )
}