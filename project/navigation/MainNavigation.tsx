import * as React from "react";
import {StackParamList} from './types';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Entypo, MaterialIcons } from '@expo/vector-icons';
import Account from '../screens/Account';
import Books from '../screens/Books';
import FindBook from '../screens/FindBook';
import LoggedProfile from "../components/organisms/LoggedProfile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RentedBooks from "../components/organisms/RentedBooks";


const Stack = createBottomTabNavigator<StackParamList>();
const AccountStack = createNativeStackNavigator();

const AccountStackNavigation = () => {
  return (
    <AccountStack.Navigator
      initialRouteName="Account"
      screenOptions={{
        headerShown: false,
        animation: "none",
      }}
    >
      <AccountStack.Screen
        name="Account"
        component={Account}
      />
      <AccountStack.Screen
        name="LoggedProfile"
        component={LoggedProfile}
        options={{ headerShown: false }}
      />
    </AccountStack.Navigator>
  );
};


const MainNavigation = () => {
    return (
      <Stack.Navigator
        initialRouteName="Find Book"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Find Book" component={FindBook} 
          options={{ headerShown: false,
            tabBarIcon: ({focused}) => (<Entypo name="magnifying-glass" size={24}  color={focused ? "#4169E1" : "lightgray"} />) }}  />
        <Stack.Screen
          name="Books"
          component={Books}
          options={{ headerShown: false,
            tabBarIcon: ({focused}) => (<MaterialIcons name="bookmark" size={24} color={focused ? "#4169E1" : "lightgray"} />) }}
        />
        <Stack.Screen
          name="AccountStack"
          component={AccountStackNavigation}
          
          options={{ headerShown: false,
            tabBarIcon: ({focused}) => (<MaterialCommunityIcons name="account" size={24}  color={focused ? "#4169E1" : "lightgray"} />) }}
        />
      </Stack.Navigator>
    );
  };



  export default MainNavigation;