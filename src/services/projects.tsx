import api from "../utils/api";
import handleResponse from "../utils/handle-response";

const getUserProjects = (userId: Number) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(`${api.baseUrl}projects/?user=${userId}`, requestOptions)
    .then(handleResponse)
    .then(projects => {
      return projects;
    });
};

export { getUserProjects };
