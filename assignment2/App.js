import { StyleSheet } from 'react-native';  
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import Start from './screens/Start';   
import AddActivity from './screens/AddActivity';
import { ActivitiesProvider } from './ActivitiesContext';  
import colors from './colors';  
import TabActivities from './components/TabActivities'; 


const Stack = createNativeStackNavigator(); 

// App component to achieve the navigation for all screens
export default function App() { 
  return (  
      <ActivitiesProvider>
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
          </Stack.Navigator>
        </NavigationContainer> 
      </ActivitiesProvider> 
  );
}

const styles = StyleSheet.create({ 
  container: {
      flex: 1, 
      backgroundColor: colors.background,
  }, 
});
