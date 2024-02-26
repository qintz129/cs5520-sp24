import { StyleSheet, Text, View } from 'react-native'
import {React, useState} from 'react' 
import { SelectList } from 'react-native-dropdown-select-list'
import colors from '../colors'

// ActivityPicker component to achieve the activity selection in AddActivity screen
export default function ActivityPicker({activity, onChange, placeholder}) { 
    const data = [ 
      {key: 'Walking', value: 'Walking'},
      {key: 'Running', value: 'Running'}, 
      {key: 'Swimming', value: 'Swimming'},  
      {key: 'Weights', value: 'Weights'},  
      {key: 'Yoga', value: 'Yoga'}, 
      {key: 'Cycling', value: 'Cycling'}, 
      {key: 'Hiking', value: 'Hiking'},
    ]
  
    return (    
      <View style={styles.container}>
      <Text style={styles.title}>Activity * </Text> 
      <SelectList 
        setSelected={(activity) => onChange(activity)} 
        data={data} 
        save="value" 
        placeholder={placeholder} 
        search={false}   
        boxStyles={styles.box} 
        dropdownTextStyles={styles.text} 
        dropdownStyles={styles.dropDown}
    />
      </View>
    );
}

const styles = StyleSheet.create({ 
    container: { 
      marginTop: 60,
      marginBottom: 20,   
      marginHorizontal: 20,
      zIndex: 100, 
      elevation: 100,   
    }, 
    title: { 
      color: colors.text,  
      fontWeight: 'bold',  
      marginBottom: 5,
    }, 
    box: { 
      borderWidth: 1.5, 
      borderColor: colors.text,  
      backgroundColor: colors.input
    }, 
    text:{ 
      color: colors.text, 
    }, 
    dropDown:{ 
      backgroundColor: colors.white, 
      borderWidth: 1.5, 
      borderColor: colors.text, 
    }
  });
