import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Serie from '../pages/Serie';
import Watched from '../pages/Watched';
import MyList from '../pages/MyList';
import AddGenero from '../pages/AddGenero';
import AddSerie from '../pages/AddSerie';

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
            <AppStack.Screen
                name="Serie"
                component={Serie}
                options={{
                headerShown: false,
                }}                
            />
            <AppStack.Screen
                name="Watched"
                component={Watched}
                options={{
                headerShown: false,
                }}                
            />
            <AppStack.Screen
                name="MyList"
                component={MyList}
                options={{
                headerShown: false,
                }}                
            />
            <AppStack.Screen
                name="AddGenero"
                component={AddGenero}
                options={{
                headerShown: false,
                }}                
            />
            <AppStack.Screen
                name="AddSerie"
                component={AddSerie}
                options={{
                headerShown: false,
                }}                
            />
        </AppStack.Navigator>
    )
}

export default AppRoutes; 