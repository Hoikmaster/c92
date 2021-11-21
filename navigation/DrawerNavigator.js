import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Profile from '../screens/profile'
import Entertainment from '../screens/entertainment'
import Travel from '../screens/travel'
import RecentStories from '../screens/recentStories'


const Drawer = createDrawerNavigator()


const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Profile" component={Profile} />
             <Drawer.Screen name="Entertainment" component={Entertainment} /> 
            <Drawer.Screen name="Travel" component={Travel} />
            <Drawer.Screen name="Recent Stories" component={RecentStories} />
            
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;