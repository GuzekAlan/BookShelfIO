import * as React from "react";
import MainScreen from '../screens/MainScreen';
import OrderFeed from '../screens/OrderFeed';
import {StackParamList} from './types';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Entypo, MaterialIcons } from '@expo/vector-icons';

const Stack = createBottomTabNavigator<StackParamList>();

const MainNavigation = () => {
    return (
      <Stack.Navigator
        initialRouteName="InitializeScreen"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="MainScreen" component={MainScreen} 
          options={{ headerShown: false,
            tabBarIcon: ({focused}) => (<Entypo name="magnifying-glass" size={24}  color={focused ? "#4169E1" : "lightgray"} />) }}  />
        <Stack.Screen
          name="AddAnimal"
          component={MainScreen}
          options={{ headerShown: false,
            tabBarIcon: ({focused}) => (<MaterialIcons name="my-library-books" size={24} color={focused ? "#4169E1" : "lightgray"} />) }}
        />
        <Stack.Screen
          name="OrderFeed"
          component={OrderFeed}
          
          options={{ headerShown: false,
            tabBarIcon: ({focused}) => (<MaterialCommunityIcons name="account" size={24}  color={focused ? "#4169E1" : "lightgray"} />) }}
        />
      </Stack.Navigator>
    );
  };



  export default MainNavigation;