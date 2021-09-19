import React, {useState, useEffect} from "react"
import ActivitiesContainer from "./ActivitiesContainer";

function ActivitiesPage(){

    const [activities, setActivities] = useState([])
    

    useEffect(() =>{
        fetch('http://localhost:3000/activities')
        .then((res) => res.json())
        .then(setActivities)

    }, [])

    return(

        <div>
            <header>Activities Board</header>
            <ActivitiesContainer activities = {activities} />
        </div>
    )
}

export default ActivitiesPage;