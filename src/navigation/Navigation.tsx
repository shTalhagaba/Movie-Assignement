// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Local imports
// import Home from '../screens/home/Home';
import DetailPage from '../screens/DetailScreen/DetailPage';
import Home from '../screens/Home/Home';
import FavouriteScreen from '../screens/FavouriteScreen/FavouriteScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="DetailPage" component={DetailPage} options={{headerShown:false}} />
        <Stack.Screen name="FavouritePage" component={FavouriteScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;