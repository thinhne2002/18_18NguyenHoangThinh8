import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screen1 from './screen/screen1.js';
import screen2 from './screen/screen2.js';
import screen3 from './screen/screen3.js';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Screen1' component={screen1} options={{headerShown:false}}/>
        <Stack.Screen name='Screen2' component={screen2} options={{headerShown:false}}/>
        <Stack.Screen name='Screen3' component={screen3} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
