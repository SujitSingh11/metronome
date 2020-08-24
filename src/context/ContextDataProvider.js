import React, { useReducer, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { reducer } from "./reducer";

// Context Created: It will help us communicate with the nested component in our application
const Context = React.createContext();

export const ContextDataProvider = ({ children }) => {
  const initialState = { bpm: 50 };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    readItemFromStorage();
  }, []);

  const readItemFromStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@APP_STATE");

      return dispatch({
        type: "FETCH_STORAGE",
        payload: jsonValue != null ? JSON.parse(jsonValue) : null,
      });
    } catch (e) {
      // error reading value
      console.warn(e);
    }
  };

  // Actions: Here we will write our actions and use dispatch function which we got from the useReducer Hook, which will then call the reducer with apporiate action type and payload

  /* ACTIONS */
  const increaseBPM = (increment) => {
    return dispatch({ type: "INC_BPM", payload: increment });
  };

  const decreaseBPM = (decrement) => {
    return dispatch({ type: "DEC_BPM", payload: decrement });
  };

  // Context Provider: This is the higher order component which will wrap over our App so we will have access to the passed value property. Here childern will be our app component
  return (
    <Context.Provider value={{ state, increaseBPM, decreaseBPM }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
