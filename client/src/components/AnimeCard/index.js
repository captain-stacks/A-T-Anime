import React from "react";

export default function AnimeCard(props) {

    return (
        <li className="btn-anime col s12 m6 l4 ">
            <div className="card">
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