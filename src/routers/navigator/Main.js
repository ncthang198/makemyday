import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigator } from "./DrawerNavigator"
// import ProductDetailScreen from "../../screens/ProductDetail"
const MainStack = createStackNavigator();

export const MainStackScreen = () => (
    <MainStack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <MainStack.Screen name='DrawerNavigator' component={DrawerNavigator}        
        />
        {/* <MainStack.Screen name='ProductDetailScreen' component={ProductDetailScreen} />         */}
    </MainStack.Navigator>
);