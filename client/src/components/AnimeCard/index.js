import React from "react";

export default function AnimeCard(props) {

    return (
        <div className="">
            <div className="">
                <div className="col s12 m6 l4 ">
                    <div className="card">
                        <div className="card-image">
                            <img alt=""src={props.image}/>
                            {/* <span className ="card-title">{props.name}</span> */}
                            {/* <a className ="btn-floating halfway-fab waves-effect waves-light red"><i className ="material-icons">Image</i></a> */}
                        </div>
                        {/* <div className="card-content">
                            <p>{props.description}</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}