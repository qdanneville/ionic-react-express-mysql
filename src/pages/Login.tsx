import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";

import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AppContext } from "../state/";

import contextInterface from "../state/context-interface";
import { authenticate } from "../services/authentication";

const Login: React.FC = () => {
  let { state, dispatch } = useContext(AppContext);
  let [userIsConnected, setUserIsConnected] = useState(false);

  //Redirect our user only after he logged in successfully
  if (userIsConnected) return <Redirect to="/home" />;

  const login = (username: string, password: string) => {
    dispatch({ type: "FETCH_USER", payload: null });
    authenticate(username, password).then(response => {
      dispatch({ type: "SET_USER", payload: response });
      setUserIsConnected(true);
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pocket Playplay</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form>
          <div className="">
            <label>Email</label>
            <input type="email" />
          </div>
          <div className="">
            <label>Password</label>
            <input type="password" />
          </div>
        </form>
        <button onClick={() => login("jeanclaude", "derpderp")}>
          SET_USER
        </button>
        {state.currentUser.firstname}
      </IonContent>
    </IonPage>
  );
};

export default Login;
