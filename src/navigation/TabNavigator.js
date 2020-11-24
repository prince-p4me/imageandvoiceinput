import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ route }) => {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'black',
    }} initialRouteName={route.name}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;