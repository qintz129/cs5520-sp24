import { StyleSheet, Text, View,  FlatList} from 'react-native'
import React from 'react' 
import colors from '../colors'

// ActivitiesList component as the element of the FlatList in All Activities and Special Activities screen
export default function ActivitiesList({ type, duration, date, isSpecial}) { 
  return (
    <View style={styles.container}>
      <Text style={styles.type}>{type}</Text>
      <View style={styles.details}>  
        {isSpecial && <Text style={styles.icon}>⚠️</Text>}
        <Text style={[styles.detailText, styles.dateText]}>{date}</Text>
        <Text style={[styles.detailText, styles.minText]}>{duration} min</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      marginHorizontal: 20, 
      paddingVertical: 15, 
      flex: 1,  
      backgroundColor: colors.normal, 
      marginVertical: 10, 
      borderRadius: 10, 
      borderRadius: 10,
      shadowOffset: { width: 1, height: 1 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
      shadowRadius: 5, 
      elevation: 5,
    },
    type: {
      fontWeight: 'bold', 
      width: '30%', 
      color: colors.title, 
      paddingHorizontal: 10, 
    },
    details: {
      flexDirection: 'row',  
      flex: 1, 
      width: '70%', 
      justifyContent: 'flex-end', 
      paddingHorizontal: 10,
    },
    detailText: { 
        backgroundColor: 'white',
        marginHorizontal: 2,   
        padding: 5,  
        color:colors.normal, 
        fontWeight: 'bold', 
    }, 
    minText: {
      paddingHorizontal: 10,
    },  
    dateText: { 
      textAlign: 'center',
    },
    icon: {
        padding: 5,
    },
  });