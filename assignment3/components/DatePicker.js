import { StyleSheet, Text, SafeAreaView, View} from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker' 
import CustomInput from '../components/CustomInput' 

// DatePicker component to achieve the date picker for AddActivity screen 
export default function DatePicker({date, formattedDate, onChange, placeholder}) {
    const [show, setShow] = useState(false); 
  
    // CalendarDateChange function to handle the date change event 
    // If select a date, set the date and close the date picker
    const CalendarDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date; 
        setShow(false);
        onChange(currentDate); 
      };
    
    // showDatepicker function to show the date picker 
    // It is triggered when the date input is focused, if it is already shown, focus again to hide it 
    // date picker will be hidden in two scenarios: 
    // 1. focus the date input again 
    // 2. reselect a new date
    const showDatepicker = () => { 
        setShow(!show);
            if (!date) {
                onChange(new Date()); 
            }
      };   
    
    return (
    <SafeAreaView style={styles.input}>  
    <CustomInput title="Date *" value={formattedDate} onFocus={showDatepicker} placeholder={placeholder}/>
    {show && (
        <DateTimePicker
            value={date}
            mode="date" 
            display="inline"
            onChange={CalendarDateChange} 
        />
    )} 
</SafeAreaView> 
  )
}

const styles = StyleSheet.create({ 
    input: {  
        marginHorizontal:20, 
        marginTop: 20,
    }, 
})