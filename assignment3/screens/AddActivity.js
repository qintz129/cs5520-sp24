import {StyleSheet, View, Alert} from 'react-native'
import colors from '../colors' 
import { writeToDB } from '../firebase-files/firestoreHelper' 
import ActivityDetails from '../components/ActivityDetails' 
import { validateForm } from '../utils'

// AddActivity component to achieve the add activity screen
export default function AddActivity({ navigation}) {    

    const cancelFunction = () => {  
        navigation.goBack();
    }  
    
    const saveFunction = (activity, date, duration) => {    
        if (validateForm(activity, date, duration)) {  
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
            activity: activity, 
            date: date,
            duration: duration,
            important: (activity === 'Running' || activity === 'Weights') && durationNumber > 60 
        };  
 
        writeToDB(newActivity);   
        navigation.goBack();

    }
    return (
        <View style={styles.container}>     
            <ActivityDetails  
            initialActivity='' 
            initialDuration='' 
            initialDate=''  
            initialformattedDate=''
            saveFunction={saveFunction}  
            cancelFunction={cancelFunction}/>
        </View>
        );
    };

const styles = StyleSheet.create({  
    container: {
        flex: 1, 
        backgroundColor: colors.background,
    }
}) 
