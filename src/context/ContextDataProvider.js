import React, { useReducer } from "react";

// Context Created: It will help us communicate with the nested component in our application
const Context = React.createContext();

// Reducer: Fancy word but it function is just a switch statement based on the dispatched action type
const reducer = (state, action) => {
  switch (action.type) {
    case "value":
      return state;
    default:
      return state;
  }
};

const ContextDataProvider = () => {
  // useReducer Hook: React's own global state management solution, it's bit easier to use rather than redux/flux
  const [state, dispatch] = useReducer(reducer, {
    /* Initail State */
  });

  // Actions: Here we will write our actions and use dispatch function which we got from the useReducer Hook, which will then call the reducer with apporiate action type and payload

  /* ACTIONS */

  // Context Provider: This is the higher order component which will wrap over our App so we will have access to the passed value property. Here childern will be our app component
  return <Context.Provider value={{ state }}>{children}</Context.Provider>;
};

export default ContextDataProvider;
