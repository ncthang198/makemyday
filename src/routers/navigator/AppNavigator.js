import React, { useState, useEffect } from 'react';
import analytics from '@react-native-firebase/analytics';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigator } from "./DrawerNavigator"
import { AuthStackScreen } from "./Auth"
import { MainStackScreen } from "./Main"
import { useSelector } from "react-redux";


const Stack = createStackNavigator();
export const AppNavigator = () => {
    const routeNameRef = React.useRef();
    const navigationRef = React.useRef();

    const token = useSelector(state => state.authReducer.token);
    
    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => routeNameRef.current = navigationRef.current.getCurrentRoute().name}
            onStateChange={async () => {
                const previousRouteName = routeNameRef.current;
                const currentRouteName = navigationRef.current.getCurrentRoute().name

                if (previousRouteName !== currentRouteName) {
                    await analytics().logScreenView({
                        screen_name: currentRouteName,
                        screen_class: currentRouteName,
                    });
                }
                routeNameRef.current = currentRouteName;
            }}
        >
            { token ? <MainStackScreen /> : <AuthStackScreen />}
        </NavigationContainer >
    )
}