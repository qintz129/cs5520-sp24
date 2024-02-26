import {View, StyleSheet } from 'react-native';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Activities from '../screens/Activities';   
import colors from '../colors';   
import { FontAwesome6 } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import CustomButton from './CustomButton';

const Tab = createBottomTabNavigator();  

// TabActivities component to achieve the tab navigation for activities
export default function TabActivities({ navigation}) { 
    const handlePress = () => {   
      navigation.navigate('Add An Activity');
    };
    return (
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: colors.normal},
        headerStyle: { backgroundColor: colors.normal},
        headerTitleAlign: 'center',
        headerTintColor: colors.white, 
        headerRight: () => {
          return (  
            <View style={{ marginRight: 30 }}>
              <CustomButton onPress={handlePress}> 
                <FontAwesome6 name="add" size={20} color={colors.white}/>
              </CustomButton> 
            </View>
          ); 
        },
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'All Activities') {
            return <FontAwesome6 name="dollar-sign" size={20} color={color} />;
          } else if (route.name === 'Special Activities') {
            return <AntDesign name="exclamation" size={25} color={color} />
          }
        }, 
        tabBarActiveTintColor: colors.activeActivity,  
        tabBarInactiveTintColor: colors.title,
      })}
       >
      <Tab.Screen name="All Activities">
        {props => <Activities {...props} />}
      </Tab.Screen>
      <Tab.Screen name="Special Activities">
        {props => <Activities special={true} {...props} />}
        </Tab.Screen>
      </Tab.Navigator>
    );
  } 

const styles = StyleSheet.create({ 
button: {
    color: colors.activeActivity, 
    fontSize: 18, 
    marginRight: 10, 
}, 
label: { 
    fontSize: 12, 
    color: colors.title,
} 
});