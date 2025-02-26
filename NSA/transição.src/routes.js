
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import First from "./First";
import Second from "./Second";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
  screenOptions={{
    gestureEnabled: true,
    gestureDirection: "vertical",
    cardStyleInterpolator:
CardStyleInterpolators.forFadeFromBottomAndroid
  }}
>
        <AppStack.Screen name="First" component={First} />
        <AppStack.Screen name="Second" component={Second} />
      </AppStack.Navigator>
    </NavigationContainer>
    
  );}