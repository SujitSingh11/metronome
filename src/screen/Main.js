import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

// Data Context
import Context from "../context/ContextDataProvider";

const Main = () => {
  const { state } = useContext(Context);

  return (
    <View style={styles.container}>
      <Text>Main App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#eaeaea",
    alignItems: "center",
  },
});

export default Main;
