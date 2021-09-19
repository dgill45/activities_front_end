import React from 'react'
import ActivityCard from './ActivityCard';

function ActivitiesContainer({activities}){

    const activityCards = activities.map((activity) => {
        return <ActivityCard key = {activity.id} 
                   activity = {activity}
                    />
    }) 


    return (

        <div>
            {activity && activityCards}
        </div>
    )
}

export default ActivitiesContainer;