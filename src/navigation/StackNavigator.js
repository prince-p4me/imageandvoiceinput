import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Setting from "../screens/Setting";
import TexttoSpeech from "../screens/TexttoSpeech";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};

export default StackNavigator;