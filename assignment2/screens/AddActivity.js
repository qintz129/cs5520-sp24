import { StyleSheet, Text, SafeAreaView, View, Alert} from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput' 
import ActivityPicker from '../components/ActivityPicker' 
import CustomButton from '../components/CustomButton' 
import colors from '../colors' 
import DatePicker from '../components/DatePicker' 
import { useActivities } from '../ActivitiesContext' 

// AddActivity component to achieve the add activity screen
export default function AddActivity({ navigation}) {    
    const { addActivity } = useActivities();
    const [activity, setActivity] = useState(''); 
    const [duration, setDuration] = useState(''); 
    const [date, setDate] = useState('');    
    const [formattedDate, setFormattedDate] = useState('');

    const handleDurationChange = (newDuration) => { 
        setDuration(newDuration); 
    } 
    
    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);  
        
        const newFormattedDate = selectedDate.toLocaleDateString('en-US', {
            weekday: 'short', // "short" for days of the week (e.g., "Tue")
            year: 'numeric', // "numeric" for year (e.g., "2024")
            month: 'short', // "short" for month name (e.g., "Jan")
            day: 'numeric', // "numeric" for day of the month
        }).replace(/,/g, ''); // Remove all commas 
        
        setFormattedDate(newFormattedDate); 
    }; 

    const handleCancel = () => {  
        navigation.goBack();
    } 

    const handleSave = () => {  
        const isPositiveNumeric = /^\d+(\.\d+)?$/.test(duration);    
        if (!activity || !duration || !date || !isPositiveNumeric) {  
            Alert.alert("Invalid Input","Please check your input values"); 
            return;
        }    
        let durationNumber;
        if (duration.includes('.')) {  
            durationNumber = parseFloat(duration, 10);
        } else { 
            durationNumber = parseInt(duration, 10);
        }
        const newActivity = {
            id: Math.floor(Math.random() * 10000) + 1,
            type: activity,
            duration: durationNumber,
            date: formattedDate,
            isSpecial: false, 
        };  
        addActivity(newActivity);  
        navigation.goBack();

    }
    return (
        <View style={styles.container}>    
            <ActivityPicker activity={activity} onChange={setActivity}/> 
            <View style={styles.input}>
                <CustomInput title="Duration(min) *" onChangeText={handleDurationChange} value={duration}/>   
            </View> 
            <DatePicker date={date} formattedDate={formattedDate} onChange={handleDateChange}/>
            <View style={styles.buttonView}> 
                <CustomButton title="Cancel" onPress={handleCancel}/>  
                <CustomButton title="Save" onPress={handleSave}/> 
            </View> 
        </View>
        );
    };

const styles = StyleSheet.create({  
    container: {
        flex: 1, 
        backgroundColor: colors.background,
      },
    input: {  
        marginHorizontal:20, 
        marginTop: 20,
    },   
    buttonView: {   
        width: '50%',
        flexDirection: 'row', 
        justifyContent: 'space-between',  
        alignSelf: 'center', 
        marginHorizontal: 20, 
        marginTop: '70%' 
    }
}) 
