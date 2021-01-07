import React, { useEffect, useRef } from 'react';
import CustomDrawer from './CustomDrawer';
import TabScreen from "./TabScreen"
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {
    const drawers = [
        {
            name: 'MainTab',
            screen: TabScreen,
            label: 'MainTab',
            icon: 'home-outline',
        }
    ];
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            {drawers.map(({ name, icon, label, screen }) => (
                <Drawer.Screen
                    key={name}
                    name={name}
                    component={screen}                    
                />
            ))}

        </Drawer.Navigator>
    )
}