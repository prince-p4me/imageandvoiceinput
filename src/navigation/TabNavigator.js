import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Setting from "../screens/Setting";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ route }) => {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'black',
    }} initialRouteName={route.name}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Setting" component={Setting} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;