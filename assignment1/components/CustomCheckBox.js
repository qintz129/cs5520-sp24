import { StyleSheet, View} from 'react-native' 
import Checkbox from 'expo-checkbox'; 
import CustomText from './CustomText';
import React from 'react';

export default function CustomCheckBox({title, isChecked, setIsChecked}) { 
     return (
        <View style={styles.container}>
            <Checkbox
                value={isChecked}
                onValueChange={setIsChecked}
            />
            <CustomText style={styles.label}>{title}</CustomText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        marginLeft: 8, 
        fontSize: 14,
    },
});