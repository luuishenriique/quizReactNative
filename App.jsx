import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack' 
import ModelScreen from './screens/ModelScreen';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import GeneralQuizScreen from './screens/GeneralQuizScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Model' component={ModelScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Sobre' component={AboutScreen} />
        <Stack.Screen name='GeneralQuiz' component={GeneralQuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
