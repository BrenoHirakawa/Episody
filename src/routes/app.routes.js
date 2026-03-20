import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Profile from '../pages/Profile';

const AppStack = createNativeStackNavigator();

function AppRoutes(){
    return(
        <AppStack.Navigator>
            <AppStack.Screen
                name="Home"
                component={Home}
                options={{
                headerShown: false,
                }}                
            />
            <AppStack.Screen
                name="Profile"
                component={Profile}
                options={{
                headerShown: false,
                }}                
            />
        </AppStack.Navigator>
    )
}

export default AppRoutes; 