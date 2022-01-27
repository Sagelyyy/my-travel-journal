import React from "react";


export default function Card(props){

    return(
        <div className="card--container">
            <img className="card--img" alt="vacation-spot" src={props.item.imageUrl} />
            <div className="card--info">
                <div className="card--location">
                <img className="card--arrow" alt="google maps arrow" src="./images/maps-arrow.png" />
                <h3 className="card--country">{props.item.location.toUpperCase()}</h3> 
                <a className="card--link" href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.item.title}</h1>
                <h5 className="card--date">{props.item.startDate} - {props.item.endDate}</h5>
                <h6 className="card--desc">{props.item.description}</h6>
            </div>
        </div>
    )

}