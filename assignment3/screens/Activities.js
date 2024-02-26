import { StyleSheet, Text, View,  FlatList} from 'react-native'
import React from 'react' 
import colors from '../colors' 
import {useEffect, useState} from 'react'
import ActivitiesList from '../components/ActivitiesList' 
import {database} from "../firebase-files/firebaseSetup"  
import { collection, onSnapshot, query } from "firebase/firestore" 
import { formatDbDate, convertTimestamp} from '../utils';

// Activity screens component to display all activities or special activities 
export default function Activities({special=false, navigation}) {   
  const [activities, setActivities] = useState([]); 

  // fetching data
  useEffect(() => { 
    // set up the listener only after the first render 
      onSnapshot(collection(database, "activities"), (querySnapshot) => { 
        if (querySnapshot.empty) {  
          console.log("No activities found in the database."); 
          setActivities([]);
        }
        let dbActivities = [];
        querySnapshot.forEach((doc) => { 
          const activityData = doc.data();  
          const timestamp = activityData.date; 
          const tempDate = convertTimestamp(timestamp); 
          const convertDate = tempDate.toISOString();
          const formattedDate = formatDbDate(tempDate);
          dbActivities.push({...activityData, id: doc.id, formattedDate: formattedDate, convertedDate: convertDate});  
        }); 
        setActivities(dbActivities);
      }); 
    }, []); 
    
    const specialActivities = activities.filter(activity => activity.important === special);  
    
    // Function to navigate to the Edit screen
    const pressFunction = (item) => {  
      navigation.navigate('Edit', {data: item});
    }
    return ( 
      <View style={styles.container}>
        <FlatList 
          style={styles.flatList}
          data={special ? specialActivities : activities}
          keyExtractor={item => item.id} // Ensure each activity has a unique id
          renderItem={({ item }) => { 
            return (
              <ActivitiesList    
                item={item} 
                pressFunction={pressFunction}
                />
            );
          }}
        /> 
        </View>
      );
    }

const styles = StyleSheet.create({ 
    container: {
        flex: 1, 
        backgroundColor: colors.background, 
    }, 
    flatList: {
        flex: 1, 
        marginTop: 20,
    },
})