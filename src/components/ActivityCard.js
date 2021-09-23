import React from "react";
import {Link} from "react-router-dom"

function ActivityCard({name, date, location, post, id}){

    return (
        <div className ="card">
            <div className = "card-body">
                <h2>{name}</h2>
                <p>{date}</p>
                <p>{location}</p>
                <p>{post}</p>
            </div>
                <Link to ={`/activities/${id}`}> 
                    <button className ="clicked">View this Activity</button>
                </Link>
            <button className ="clicked">View this Activity</button>

        </div>
    )
}

export default ActivityCard;