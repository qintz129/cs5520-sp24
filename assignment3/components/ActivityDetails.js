import { StyleSheet, Text, View} from 'react-native'
import React, { useState } from 'react'
import CustomInput from './CustomInput' 
import ActivityPicker from './ActivityPicker' 
import CustomButton from './CustomButton' 
import colors from '../colors' 
import DatePicker from './DatePicker' 
import { formatDbDate } from '../utils' 
import Checkbox from 'expo-checkbox'  

// ActivityDetails component to display the form of an activity and is reused by AddActivity and EditAcitivity screens
export default function ActivityDetails({initialActivity, initialDuration, initialDate, initialformattedDate, 
    saveFunction, cancelFunction, isEdit=false, isChecked=false, checkFunction = () => {}, important=false}) {    
    const [activity, setActivity] = useState(activity => initialActivity); 
    const [duration, setDuration] = useState(duration => initialDuration); 
    const [date, setDate] = useState(date => initialDate);   
    const [formattedDate, setFormattedDate] = useState(formattedDate => initialformattedDate); 

    const handleDurationChange = (newDuration) => { 
        setDuration(newDuration);  
    } 
    
    const handleDateChange = (selectedDate) => {
        setDate(date => selectedDate); 
        const newFormattedDate = formatDbDate(selectedDate);
        
        setFormattedDate(formattedDate => newFormattedDate); 
    };  

    const handleSave = () => {
        saveFunction(activity, date, duration); 
    };  

    return (
        <View style={styles.container}>    
            <ActivityPicker activity={activity} onChange={setActivity} placeholder={initialActivity || "Select An Activity"}/> 
            <View style={styles.input}>
                <CustomInput title="Duration(min) *" onChangeText={handleDurationChange} value={duration}/>   
            </View> 
            <DatePicker date={date} formattedDate={formattedDate} onChange={handleDateChange}/>  
            <View style={styles.controlView}> 
            {/* The checkbox is only displayed when the item is marked as special and the screen is in edit mode */}
                {isEdit && important && <View style={styles.checkboxView}> 
                    <Text style={styles.checkboxText}>This item is marked as special.Select the checkbox if you would like to approve it.</Text> 
                    <Checkbox
                    value={isChecked}
                    onValueChange={checkFunction}
                /> 
                </View>}
                <View style={styles.buttonView}> 
                    <CustomButton customStyle={styles.cancelButton} onPress={cancelFunction}>   
                        <Text style={styles.buttonText}>Cancel</Text> 
                    </CustomButton>
                    <CustomButton customStyle={styles.saveButton} onPress={handleSave}>  
                        <Text style={styles.buttonText}>Save</Text> 
                    </CustomButton>
                </View>  
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
        marginTop: 20, 
        flexDirection: 'row', 
        justifyContent: 'space-between',  
        alignSelf: 'center',  
    }, 
    cancelButton: { 
        backgroundColor:colors.resetButton, 
        width: '40%',  
        marginRight: 10, 
        borderRadius: 5,
    },  
    saveButton: { 
        backgroundColor:colors.normal, 
        width: '40%',  
        marginLeft: 10, 
        borderRadius: 5,
    }, 
    buttonText: { 
        color:colors.white, 
        textAlign: 'center', 
        paddingVertical: 7,
    }, 
    checkboxView: {  
        flexDirection: 'row',  
    }, 
    checkboxText: { 
        color: colors.text, 
        width: '80%', 
        fontWeight: 'bold', 
        marginHorizontal: 15
    }, 
    controlView: { 
        marginTop:"40%"
    }
}) 
