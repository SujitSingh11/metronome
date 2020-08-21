import React from "react";
import { Text, SafeAreaView } from "react-native";

// React Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import Main from "./screen/Main";
import Library from "./screen/Library";
import Settings from "./screen/Settings";

// Icons
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BottomTabs = createBottomTabNavigator();

const Routing = () => {
  return (
    <BottomTabs.Navigator
      tabBarOptions={{
        activeTintColor: "#e91e63",
        labelStyle: {
          marginBottom: 10,
        },
        style: {
          padding: 5,
          height: 65,
          backgroundColor: "#292929",
        },
      }}
      initialRouteName="Metronome"
    >
      <BottomTabs.Screen
        name="Metronome"
        component={Main}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Foundation name="sound" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Library"
        component={Library}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="library-music"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default Routing;
