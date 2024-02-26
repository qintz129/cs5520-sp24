import { StyleSheet, TextInput, View, Text } from 'react-native' 
import React from 'react'  
import colors from '../colors'

// CustomInput component to achieve the input for all screens 
// Customized the input style and reminder message for invalid input
export default function CustomInput({title, onChangeText, reminder='', inValidError=false,  
                                        keyboardType="default", value, onFocus}){ 
    const handleFocus = onFocus || (() => {});
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <TextInput  
                style={styles.input}  
                onChangeText={onChangeText}  
                keyboardType={keyboardType}  
                value = {value} 
                onFocus = {handleFocus} 
            /> 
            {inValidError&&<Text style={styles.reminder}>{`Please enter a valid ${reminder}.`}</Text>}
        </View>
    )
}


const styles = StyleSheet.create({  
    container:{ 
        marginBottom: 20, 
        width: '100%',
    }, 
    text: { 
        color: colors.text,  
        fontWeight: 'bold', 
    },
    input: { 
        height: 40, 
        fontSize: 16, 
        borderWidth: 1.5, 
        borderColor: colors.text,
        marginTop: 5, 
        color: colors.text, 
        backgroundColor: colors.input,
        borderRadius: 10, 
        paddingHorizontal: 10,
    }, 
    reminder:{ 
        color: colors.remind, 
    }
})