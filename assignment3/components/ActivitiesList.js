import { StyleSheet, Text, View} from 'react-native'
import React from 'react' 
import colors from '../colors' 
import CustomButton from './CustomButton';

// ActivitiesList component as the element of the FlatList in All Activities and Special Activities screen
export default function ActivitiesList({item, pressFunction}) {  
  const handlePress = () => { 
    pressFunction(item)
  };
  return (
    <CustomButton onPress={handlePress} customStyle={styles.container}>
      <Text style={styles.type}>{item.activity}</Text>
      <View style={styles.details}>  
        {item.important && <Text style={styles.icon}>⚠️</Text>}
        <Text style={[styles.detailText, styles.dateText]}>{item.formattedDate}</Text>
        <Text style={[styles.detailText, styles.durationText]}>{item.duration} min</Text>
      </View>
    </CustomButton>
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
      alignSelf: 'center',
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
    durationText: {
      paddingHorizontal: 10,
    },  
    dateText: { 
      textAlign: 'center',
    },
    icon: {
        padding: 5,
    },
  });