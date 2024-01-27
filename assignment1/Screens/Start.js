import { StyleSheet, View, Modal, SafeAreaView} from 'react-native'
import React, { useState } from 'react';
import Card from '../components/Card' 
import CustomInput from '../components/CustomInput' 
import CustomCheckBox from '../components/CustomCheckBox'  
import CustomText from '../components/CustomText' 
import CustomButton from '../components/CustomButton';

export default function Start({dismissModal, name, setName, number, setNumber, handleAttempts, isChecked, setIsChecked}) {   
  const [nameError, setNameError] = useState(false); 
  const [numberError, setNumberError] = useState(false);
  const handleCheckboxChange  = () => {  
    setIsChecked(!isChecked);  
  }    

  const validateName = (name) => {  
    return /^[A-Za-z ]+$/.test(name) && name.trim().length > 1; 
  } 

  const validateNumber = (number) => {   
    const num = parseInt(number); 
    return number.length == 4 && !isNaN(num) && num >= 1020 && num <= 1029;
  } 


  const handleConfirm = () => {  
    if (!validateName(name)) { 
      setNameError(true); 
      setName('')
    } else { 
      setNameError(false); 
    } 
    if (!validateNumber(number)) { 
      setNumberError(true); 
      setNumber('')
    } else { 
      setNumberError(false); 
    } 

    if (validateName(name) && validateNumber(number)) {  
      handleAttempts(); 
      dismissModal(); 
    }
  }


  const handleReset = () => {
    setIsChecked(false);
    setName('');
    setNumber(''); 
    setNameError(false); 
    setNumberError(false);  
  }; 

  const handleNameChange = (newName) => {
    setName(newName);  
    setNameError(false);   
  }; 

  const handleNumberChange = (newNumber) => {
    setNumber(newNumber);  
    setNumberError(false);   
  };

  return ( 
    
      <SafeAreaView style={styles.container}> 
        <View style={styles.header}>
          <CustomText>Guess My Number</CustomText>  
        </View>
        <Card> 
        <CustomInput title="Name" value={name} onChangeText={handleNameChange} reminder="name" inValidError={nameError}/> 
        <CustomInput title="Enter a Number" value={number} onChangeText={handleNumberChange} reminder="number" inValidError={numberError} keyboardType="numeric"/>  
        <CustomCheckBox  
          title="I am not a robot"  
          isChecked={isChecked}
          setIsChecked={handleCheckboxChange}
          />   
        <View style={styles.buttonView}> 
          <CustomButton title="Reset" onPress={handleReset}/>  
          <CustomButton title="Confirm" onPress={handleConfirm} disabled={!isChecked}/> 
        </View>
        </Card>
      </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,  
      justifyContent: 'flex-start', 
      alignItems: 'center',  
      width: "100%",  
    }, 
    header: { 
      marginBottom: 50
    }, 
    buttonView: { 
      flexDirection: 'row', 
      justifyContent: 'space-evenly', 
      width: '100%', 
      marginTop: 20, 
      marginBottom: 20
    }
  });