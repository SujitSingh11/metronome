import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Data Context
import Context from "../context/ContextDataProvider";

const Main = () => {
  const { state, increaseBPM, decreaseBPM } = useContext(Context);
  return (
    <View style={styles.container}>
      <Text>BPM: {state.bpm}</Text>
      <TouchableOpacity style={styles.button} onPress={() => increaseBPM(5)}>
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => decreaseBPM(5)}>
        <Text>Decrease</Text>
      </TouchableOpacity>
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
  button: {
    marginTop: 15,
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 200,
    alignItems: "center",
  },
});

export default Main;
