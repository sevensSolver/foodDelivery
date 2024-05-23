import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Tabs} from './navigation/tabs';
import {
  HomeScreen,
  RestaurantScreen,
  OrderDeliveryScreen,
  UserList,
  UserDetails,
  Calender,
} from './screens';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Calender'}>
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="OrderDelivery" component={OrderDeliveryScreen} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="Calender" component={Calender} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
