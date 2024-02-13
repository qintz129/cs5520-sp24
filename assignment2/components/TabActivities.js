import { TouchableOpacity, Text, StyleSheet } from 'react-native';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Activities from '../screens/Activities';   
import colors from '../colors';  

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
            <TouchableOpacity onPress={handlePress}> 
              <Text style={styles.button}>Add</Text> 
            </TouchableOpacity>
          );
        },
        tabBarIcon: ({ focused, color, size }) => {
          let icon = '';
          if (route.name === 'All Activities') {
            icon = '$';
          } else if (route.name === 'Special Activities') {
            icon = '!';
          }
          return <Text style={[styles.icon, { color: color, fontSize: size}]}>{icon}</Text>;
        }, 
        tabBarActiveTintColor: colors.activeActivity, 
      })}
       >
        <Tab.Screen name="All Activities">
          {() => <Activities/>}
        </Tab.Screen>
        <Tab.Screen name="Special Activities">
          {() => <Activities special={true} />}
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
icon: { 
    fontSize: 20, 
    color: colors.title,
}, 
label: { 
    fontSize: 12, 
    color: colors.title,
} 
});