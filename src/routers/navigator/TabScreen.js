import React, { useEffect, useRef } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Colors } from "../../configs"
import HomeScreen from '../../screens/HomeScreen';;
import QuotesScreen from '../../screens/QuotesScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createMaterialBottomTabNavigator();

export default TabScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    const color = focused ? Colors.primary : Colors.grey;
                    if (route.name === 'HomeScreen') {
                        iconName = 'user';
                    } else if (route.name === 'ProductList') {
                        iconName = 'apple';
                    }
                    return <Icon name={iconName} size={23} color={color} />;
                },
            })}
            barStyle={{
                backgroundColor: Colors.light_grey,
                height: 50,
                justifyContent: 'center',
            }}
        // activeColor={Colors.lighter_green}
        // inactiveColor={Colors.grey}
        >
            <Tab.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                }}
            />
            <Tab.Screen
                name='QuoteList'
                component={QuotesScreen}
                options={() => ({
                    tabBarLabel: 'Danh sách quote',
                })}
            />
        </Tab.Navigator>
    );
};