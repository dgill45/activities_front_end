import React from 'react'
import ActivityCard from './ActivityCard';

function ActivitiesContainer({activities}){

    const activityCards = activities.map((activity) => {
        return <ActivityCard key = {activity.id} 
                   activities = {activities}
                    />
    }) 


    return (

        <div>
            {activities && activityCards}
        </div>
    )
}

export default ActivitiesContainer;