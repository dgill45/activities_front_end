import React, {useState} from "react"

const ActivityContext = React.createContext();

function ActivityProvider({children}){

    const [activities, setActivities] = useState([])

    useEffect(() =>{
        fetch('http://localhost:3000/activities')
        .then((res) => res.json())
        .then(setActivities)

    }, [])

    return (
    <ActivityContext.Provider value={{activities, setActivities}}>
        {children}
    </ActivityContext.Provider>
    )
}

export {ActivityContext, ActivityProvider};