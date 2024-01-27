import { StyleSheet, Text, View } from 'react-native'
import React from 'react'  
import colors from './colors'

export default function CustomText({children, style}) {
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({ 
        text: {
          color: colors.purple,   
          fontWeight: '500', 
          fontSize: 20,
        },
      });