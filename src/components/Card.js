import React from "react";


export default function Card(props){

    return(
        <div className="card--container">
            <img alt="vacation-spot" src={props.item.imageUrl} />
            <div className="card--info">
                <div className="card--location">
                <h3>{props.item.location}</h3> 
                <h5> View on Google Maps</h5>
                </div>
                <h1>{props.item.title}</h1>
                <h5>{props.item.startDate} - {props.item.endDate}</h5>
                <h6>{props.item.description}</h6>
            </div>
        </div>
    )

}