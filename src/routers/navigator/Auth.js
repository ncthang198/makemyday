import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../../screens/LoginScreen"
import RegisterScreen from "../../screens/RegisterScreen"

const AuthStack = createStackNavigator();

export const AuthStackScreen = () => (
    <AuthStack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <AuthStack.Screen name='Login' component={LoginScreen}
        //animationEnabled: false , nằm trong option        
        />
        <AuthStack.Screen name='Register' component={RegisterScreen} />
    </AuthStack.Navigator>
);