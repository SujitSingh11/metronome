import React, { useContext, useEffect, useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";

// Data Context
import Context from "../context/ContextDataProvider";

// ICONS
import { AntDesign } from "@expo/vector-icons";

const Main = () => {
  const { state, increaseBPM, decreaseBPM, changeBPM, togglePlay } = useContext(
    Context
  );

  const intervalIdRef = useRef(-1);

  const startLoop = () => {
    intervalIdRef.current = setInterval(() => {
      console.log("Playing");
    }, state.bpmMillisecond);
  };

  const stopLoop = () => {
    console.log("Stopped");
    clearInterval(intervalIdRef.current);
  };

  useEffect(() => {
    if (state.playStatus) {
      startLoop();
    } else {
      stopLoop();
    }
    return stopLoop;
  }, [state.playStatus]);

  return (
    <View style={styles.container}>
      <View style={styles.cardView}></View>
      <View style={styles.bpmView}>
        <Slider
          value={state.bpm}
          onValueChange={(value) => {
            changeBPM(value);
          }}
          maximumValue={220}
          minimumValue={40}
          step={1}
          style={styles.slider}
          minimumTrackTintColor="#212121"
          maximumTrackTintColor="#212121"
          thumbTintColor="#616161"
        />
        <View style={styles.bpmInputView}>
          <Text style={styles.BPMText}>BPM: {state.bpm}</Text>
        </View>
        <View style={styles.buttonsView}>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => decreaseBPM(5)}
            >
              <Text>Decrease -5</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => increaseBPM(5)}
            >
              <Text>Increase +5</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonPlay}
          onPress={() => {
            togglePlay();
          }}
        >
          <AntDesign
            name={state.playStatus ? "pausecircleo" : "playcircleo"}
            size={32}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "15%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bpmView: {
    alignItems: "center",
  },
  buttonsView: {
    flexDirection: "row",
  },
  button: {
    marginTop: 15,
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 120,
    alignItems: "center",
    borderRadius: 5,
    margin: 10,
  },
  buttonPlay: {
    marginTop: 15,
    backgroundColor: "#DDDDDD",
    padding: 15,
    alignItems: "center",
    borderRadius: 50,
    margin: 10,
    marginBottom: 20,
  },
  slider: {
    width: "80%",
  },
  BPMText: {
    fontSize: 15,
  },
  cardView: {
    height: 100,
    backgroundColor: "red",
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  bpmInputView: {
    marginTop: 20,
  },
});

export default Main;
