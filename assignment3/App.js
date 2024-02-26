import { StyleSheet } from 'react-native';  
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import Start from './screens/Start';   
import AddActivity from './screens/AddActivity'; 
import EditActivity from './screens/EditActivity';
import colors from './colors';  
import TabActivities from './components/TabActivities'; 


const Stack = createNativeStackNavigator(); 

// App component to achieve the navigation for all screens
export default function App() { 
  return (  
        <NavigationContainer> 
          <Stack.Navigator 
                screenOptions={{ 
                  tabBarStyle: { backgroundColor: colors.normal },  
                  headerStyle: { backgroundColor: colors.normal }, 
                  headerTintColor: colors.white,  
                  headerTitleAlign: 'center',
                  headerBackTitleVisible: false 
                }}
          >  
            <Stack.Screen name="Start" component={Start} options={{headerShown: false}} />
            <Stack.Screen name="Activities"  
                          component={TabActivities}    
                          options={{ headerShown: false }}
                          /> 
            <Stack.Screen name="Add An Activity" 
             component={AddActivity}/> 
            <Stack.Screen name="Edit" 
             component={EditActivity}/>
          </Stack.Navigator>
        </NavigationContainer> 
  );
}

const styles = StyleSheet.create({ 
  container: {
      flex: 1, 
      backgroundColor: colors.background,
  }, 
});
