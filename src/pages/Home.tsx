import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonGrid,
  IonCol
} from "@ionic/react";

import React, { useContext, useEffect } from "react";
import { ProjectsContext } from "../state/projects";

import { getUserProjects } from "../services/projects";

const Home: React.FC = props => {
  const { state, dispatch } = useContext(ProjectsContext);

  useEffect(() => {
    dispatch({ type: "FETCH_PROJECTS", payload: null });
    let user = JSON.parse(window.localStorage.getItem("currentUser") || "{}");
    if (user.id)
      getUserProjects(user.id).then(projects => {
        dispatch({ type: "SET_PROJECTS", payload: projects });
      });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            {state.collection
              ? state.collection.map((item: any) => {
                  return <IonCol key={item.id}>{item.name}</IonCol>;
                })
              : null}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
