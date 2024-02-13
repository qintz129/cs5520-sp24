import { StyleSheet, Text, View,  FlatList} from 'react-native'
import React from 'react' 
import colors from '../colors' 
import { useActivities } from '../ActivitiesContext'  
import ActivitiesList from '../components/ActivitiesList'

// Activity screens component to display all activities or special activities 
export default function Activities({special=false}) {  
    const { activities } = useActivities(); 
    const specialActivities = activities.filter(activity => activity.isSpecial === special);
    return ( 
      <View style={styles.container}>
        <FlatList 
          style={styles.flatList}
          data={special ? specialActivities : activities}
          keyExtractor={item => item.id} // Ensure each activity has a unique id
          renderItem={({ item }) => { 
            return (
              <ActivitiesList  
                type={item.type}  
                duration={item.duration}  
                date={item.date} 
                isSpecial={item.isSpecial}  
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