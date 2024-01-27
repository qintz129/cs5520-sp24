import { StyleSheet, TextInput, View, Text } from 'react-native' 
import React from 'react'  
import CustomText from './CustomText' 
import colors from './colors'

export default function CustomInput({title, value, onChangeText, reminder, inValidError, keyboardType="default"}) {
    return (
        <View style={styles.container}>
            <CustomText>{title}</CustomText>
            <TextInput  
                style={styles.input}  
                value={value}  
                onChangeText={onChangeText}  
                keyboardType={keyboardType} 
            /> 
            {inValidError&&<Text style={styles.reminder}>{`Please enter a valid ${reminder}`}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({  
    container:{ 
        marginBottom: 50,
    },
    input: { 
        height: 40,
        fontSize: 18, 
        borderBottomWidth: 1.5, 
        borderBottomColor: colors.purple,  
        marginTop: 5, 
        textAlign: "center", 
        color: colors.purple, 
        fontWeight: '600'
    }, 
    reminder:{ 
        color: colors.darkGrey, 
        fontSize: 15,
    }
})