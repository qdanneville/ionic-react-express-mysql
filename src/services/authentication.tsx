import api from "../utils/api";
import handleResponse from "../utils/handle-response";

//Check if the user is already stored in our localStorage
const handleUserIsAuthenticated = () => {
  return window.localStorage.getItem("currentUser");
};

const authenticate = (username: string, password: string) => {
  const requestOptions = {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password })
  };

  return fetch(`${api.baseUrl}users/authenticate/`, requestOptions)
    .then(handleResponse)
    .then(user => {
      localStorage.setItem("currentUser", JSON.stringify(user));
      return user;
    });
};

export { authenticate, handleUserIsAuthenticated };
