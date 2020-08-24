import AsyncStorage from "@react-native-community/async-storage";

const writeItemToStorage = async (newState) => {
  try {
    const jsonValue = JSON.stringify(newState);
    return await AsyncStorage.setItem("@APP_STATE", jsonValue);
  } catch (e) {
    // saving error
    console.warn(e);
  }
};

// useReducer Hook: React's own global state management solution, it's bit easier to use rather than redux/flux
export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_STORAGE":
      return action.payload != null ? action.payload : state;
    case "INC_BPM":
      writeItemToStorage({
        ...state,
        bpm: state.bpm + action.payload,
      });
      return {
        ...state,
        bpm: state.bpm + action.payload,
      };
    case "DEC_BPM":
      writeItemToStorage({
        ...state,
        bpm: state.bpm - action.payload,
      });
      return {
        ...state,
        bpm: state.bpm - action.payload,
      };
    default:
      return state;
  }
};
