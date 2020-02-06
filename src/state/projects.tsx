import React, { createContext, useReducer } from "react";
import logger from "./logger";

import contextInterface from "./context-interface";

let ProjectsContext = createContext({} as contextInterface);

const projectInitialState = {
  isLoading: false,
  collection: []
};

let projectsReducer = (state: any, action: { type: string, payload: any }) => {
  switch (action.type) {
    case "FETCH_PROJECTS": {
      return { ...state, isLoading: true };
    }
    case "SET_PROJECTS": {
      return { ...state, collection: action.payload };
    }
  }
  return state;
};

const loggerReducer = logger(projectsReducer);

const ProjectsContextProvider = (props: any) => {
  const fullInitialState = {
    ...projectInitialState
  };

  let [state, dispatch] = useReducer(loggerReducer, fullInitialState);
  let value = { state, dispatch };

  return (
    <ProjectsContext.Provider value={value}>
      {props.children}
    </ProjectsContext.Provider>
  );
};

let ProjectsContextConsumer = ProjectsContext.Consumer;

export { ProjectsContext, ProjectsContextProvider, ProjectsContextConsumer };
