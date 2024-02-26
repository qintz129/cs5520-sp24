import { StyleSheet, View, Alert} from 'react-native';
import React, { useEffect, useState } from "react";
import colors from '../colors'; 
import ActivityDetails from '../components/ActivityDetails'; 
import { FontAwesome6 } from '@expo/vector-icons'; 
import CustomButton from '../components/CustomButton'; 
import { deleteFROMDB, updateToDB } from '../firebase-files/firestoreHelper'; 
import { validateForm } from '../utils';

// EditActivity component to achieve the edit activity screen
export default function EditActivity({navigation, route}) {  
 
  const { id, activity, duration, convertedDate, formattedDate, important} = route.params.data; 
  const initialDate = new Date(convertedDate);   
  const [isChecked, setIsChecked] = useState(false); 

  const handleCheck = () => {  
    setIsChecked(!isChecked);
  }
  
  
  const handleSave = (activity, date, duration) => { 
    if (validateForm(activity, date, duration)) {  
      Alert.alert("Invalid Input","Please check your input values"); 
      return;
  }     

  // Alert the user to confirm the changes
  Alert.alert(
    "Important",
    "Are you sure you want to save these changes?", 
    [
        {
            text: "No",
            style: "cancel"
        },
        {
            text: "Yes",
            onPress: () => { 
              let durationNumber; 
  
              if (duration.includes('.')) {  
                  durationNumber = parseFloat(duration, 10);
              } else { 
                  durationNumber = parseInt(duration, 10);
              }  
            
              const updateActivity = {
                activity: activity, 
                date: date,
                duration: duration,
                important: (activity === 'Running' || activity === 'Weights') && durationNumber > 60 
            };   
            
            if (isChecked) {  
              updateActivity.important = false;
            }

              updateToDB(id, updateActivity);    
              navigation.goBack();
            }
        }
    ],
    { cancelable: true }
);  
} 

  const handleCancel = () => {  
    navigation.goBack();
  }   
  
  const handleDelete = () => {    
    // Alert the user to confirm the deletion
    Alert.alert(
      "Important",
      "Are you sure you want to delete this item?", 
      [
          {
              text: "No",
              style: "cancel"
          },
          {
              text: "Yes",
              onPress: () => {
                  deleteFROMDB(id);    
                  navigation.goBack();
              }
          }
      ],
      { cancelable: true }
  );  
  } 
  
  // Set the header right delete button
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { 
      return (
        <View style={{ marginRight: 20 }}>
        <CustomButton onPress={handleDelete}> 
        <FontAwesome6 name="trash-can" size={24} color={colors.white} />
        </CustomButton> 
      </View> 
      )
    } 
  });
  }, []);
 
  return (
    <View style={styles.container}>     
    <ActivityDetails  
    initialActivity= {activity} 
    initialDuration={duration} 
    initialDate={initialDate} 
    initialformattedDate={formattedDate}
    saveFunction={handleSave}  
    cancelFunction={handleCancel} 
    isEdit={true} 
    important={important} 
    isChecked={isChecked} 
    checkFunction={handleCheck} 
    />
</View>
  )
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1, 
    backgroundColor: colors.background, 
}, 
})