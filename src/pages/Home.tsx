import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";

import React, { useContext } from "react";
import { ProjectsContext } from "../state/projects";

const Home: React.FC = () => {
  const { state, dispatch } = useContext(ProjectsContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your oyster.
        <p>
          If you get lost, the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ionicframework.com/docs/"
          >
            docs
          </a>{" "}
          will be your guide.
        </p>
        <button onClick={() => dispatch({ type: "SET_PROJECTS", payload: ['1',2] })}>
          SET_USER
        </button>
      </IonContent>
    </IonPage>
  );
};

export default Home;
