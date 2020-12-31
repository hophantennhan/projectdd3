import React, { Component } from 'react'
import{NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from'@react-navigation/stack';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import MainTabScreen from './MainTabScreen';
const Stack = createStackNavigator();

export default class AppNavigation extends Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator
                screenOptions = {{headerShown: false}}
                inittialouteName = {'SplashScreen'}>
                    <Stack.Screen name = "SplashScreen" component = {SplashScreen}/>
                    <Stack.Screen name = "SignInScreen" component = {SignInScreen}/>
                    <Stack.Screen name = "SignUpScreen" component = {SignUpScreen}/>
                    <Stack.Screen name = "HomeScreen" component = {HomeScreen}/>
                    <Stack.Screen name = "MainTabScreen" component = {MainTabScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}