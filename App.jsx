import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'  
import ModelScreen from './screens/ModelScreen';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
const Tabs = createBottomTabNavigator()

export default function App() {
  let Navigation = Drawer; 

  return (
    <NavigationContainer>
     {<Navigation.Navigator initialRouteName='Home'>
        <Navigation.Screen name='Model' component={ModelScreen} />
        <Navigation.Screen name='Home' component={HomeScreen} />
        <Navigation.Screen name='Sobre' component={AboutScreen} />
      </Navigation.Navigator>}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
