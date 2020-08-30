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

const calculateMiliseconds = (bpm) => {
  return parseFloat(((60 / bpm) * 1000).toFixed(4));
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
        bpmMillisecond: calculateMiliseconds(state.bpm + action.payload),
      });
      return {
        ...state,
        bpm: state.bpm + action.payload,
        bpmMillisecond: calculateMiliseconds(state.bpm + action.payload),
      };
    case "DEC_BPM":
      writeItemToStorage({
        ...state,
        bpm: state.bpm - action.payload,
        bpmMillisecond: calculateMiliseconds(state.bpm - action.payload),
      });
      return {
        ...state,
        bpm: state.bpm - action.payload,
        bpmMillisecond: calculateMiliseconds(state.bpm - action.payload),
      };
    case "CHANGE_BPM":
      writeItemToStorage({
        ...state,
        bpm: action.payload,
        bpmMillisecond: calculateMiliseconds(state.bpm),
      });
      return {
        ...state,
        bpm: action.payload,
        bpmMillisecond: calculateMiliseconds(state.bpm),
      };
    case "TOGGLE_PLAY":
      return {
        ...state,
        playStatus: !state.playStatus,
      };
    default:
      return state;
  }
};
