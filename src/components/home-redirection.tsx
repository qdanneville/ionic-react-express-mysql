import React, { useContext } from "react";
import { AppContext } from "../state";
import { Redirect } from "react-router-dom";

// import Login from "../pages/Login";
// import Home from "../pages/Home";

const PrivateRoute = ({ children }: any) => {
  let { state, dispatch } = useContext(AppContext);

  return state.authenticated ? <Redirect to="/home" /> : <Redirect to="/login" />;
};

export default PrivateRoute;
