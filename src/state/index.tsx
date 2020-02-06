import React, { createContext, useReducer } from "react";
import logger from "./logger";
import contextInterface from "./context-interface";

let AppContext = createContext({} || null || "" || (undefined as any));

const AppInitialState = {
  authenticated: false,
  userIsLoading: false,
  currentUser: {},
  lang: "en"
};

let AppReducer = (state: any, action: { type: string; payload: any }) => {
  switch (action.type) {
    case "FETCH_USER": {
      return { ...state, userIsLoading: true };
    }
    case "SET_USER": {
      return {
        ...state,
        authenticated: true,
        userIsLoading: false,
        currentUser: action.payload
      };
    }
  }
  return state;
};

const loggerReducer = logger(AppReducer);

const AppContextProvider = (props: any) => {
  const fullInitialState = {
    ...AppInitialState
  };

  let [state, dispatch] = useReducer(loggerReducer, fullInitialState);
  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

let AppContextConsumer = AppContext.Consumer;

export {
  AppContext,
  AppContextProvider,
  AppContextConsumer,
  AppReducer,
  AppInitialState
};
