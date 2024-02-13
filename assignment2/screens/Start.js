import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput' 
import CustomButton from '../components/CustomButton' 
import colors from '../colors';

// Start component to achieve the start screen
export default function Start({ navigation}) { 
    const [email, setEmail] = useState(''); 
    const [phone, setPhone] = useState(''); 
    const [emailError, setEmailError] = useState(false); 
    const [phoneError, setPhoneError] = useState(false); 
    const [isInput, setIsInput] = useState(false); 
    
    // validateEmail function to check if the email is valid
    const validateEmail = (email) => { 
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    } 
    
    // validatePhone function to check if the phone number is valid
    const validatePhone = (phone) => { 
        return /^\d{10}$/.test(phone);
    } 
    // handleEmailChange function to handle the email change event 
    // If the email is valid, set the email and clear the error reminder
    const handleEmailChange = (newEmail) => { 
        setEmail(newEmail); 
        setEmailError(false);  
        setPhoneError(false); 
        setIsInput(newEmail !== '' || phone !== '');
    }  
    // handlePhoneChange function to handle the phone change event 
    // If the phone number is valid, set the phone and clear the error reminder
    const handlePhoneChange = (newPhone) => { 
        setPhone(newPhone);  
        setEmailError(false); 
        setPhoneError(false); 
        setIsInput(email !== '' || newPhone !== '');
    } 
    // handleStart function to handle the start button click event 
    // If the email and phone number are valid, navigate to the Activities screen
    const handleStart = () => { 
        if (!validateEmail(email)) { 
            setEmailError(true);  
        } 
        if (!validatePhone(phone)) { 
            setPhoneError(true); 
        }  
        if (validateEmail(email) && validatePhone(phone)) { 
            navigation.navigate('Activities');
        }
    } 
    // handleReset function to handle the reset button click event
    const handleReset = () => {  
        setIsInput(false);
        setPhone('');
        setEmail(''); 
        setPhoneError(false); 
        setEmailError(false);   
    };

  return (
    <View style={styles.container}>
    <CustomInput title="Email Address" onChangeText={handleEmailChange} reminder="email address" inValidError={emailError} value={email}/> 
    <CustomInput title="Phone Number" onChangeText={handlePhoneChange} reminder="phone number" inValidError={phoneError} keyboardType="numeric" value={phone}/>   
    <View style={styles.buttonView}> 
        <CustomButton title="Reset" onPress={handleReset}/>  
        <CustomButton title="Start" onPress={handleStart} disabled={!isInput}/> 
    </View>
    </View>
  )
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        padding: 10,  
        justifyContent: 'center',
        alignItems: 'center',  
        width: "100%",   
        backgroundColor: colors.background,
      }, 
      buttonView: { 
        flexDirection: 'row', 
        justifyContent: 'space-evenly',  
        width: '100%',  
        alignSelf: 'center',
      } 
      
})