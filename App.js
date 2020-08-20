import { StatusBar } from "expo-status-bar";
import React from "react";
import ContextDataProvider from "./src/context/ContextDataProvider";
import Routing from "./src/Routing";

export default function App() {
  return (
    <ContextDataProvider>
      <Routing />
      <StatusBar style="auto" />
    </ContextDataProvider>
  );
}
