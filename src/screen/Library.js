import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Library = () => {
  return (
    <View style={styles.container}>
      <Text>Library</Text>
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

export default Library;
