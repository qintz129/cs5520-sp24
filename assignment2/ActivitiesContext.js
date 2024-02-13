import React, { createContext, useContext, useState } from 'react';

const ActivitiesContext = createContext();
// ActivitiesContext to store the activities and addActivity function
export function useActivities() {
  return useContext(ActivitiesContext);
}

export const ActivitiesProvider = ({ children }) => { 
    const initialActivities = [];
    const [activities, setActivities] = useState(initialActivities);
    // addActivity function to add a new activity to the activities 
    const addActivity = (activity) => {
        const isSpecial = (activity.type === 'Running' || activity.type === 'Weights') && activity.duration > 60;
        const newActivity = { ...activity, isSpecial };
        setActivities(oldActivities => [...oldActivities, newActivity]);
    };

    return (
        <ActivitiesContext.Provider value={{ activities, addActivity }}>
        {children}
        </ActivitiesContext.Provider>
    );
};