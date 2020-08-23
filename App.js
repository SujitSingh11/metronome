import { StatusBar } from "expo-status-bar";
import React from "react";
import { ContextDataProvider } from "./src/context/ContextDataProvider";
import Routing from "./src/Routing";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <ContextDataProvider>
        <Routing />
        <StatusBar style="auto" />
      </ContextDataProvider>
    </NavigationContainer>
  );
}
