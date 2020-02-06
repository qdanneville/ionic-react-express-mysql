const handleResponse = (response: any) => {
  return response.text().then((text: any) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if ([401, 403].indexOf(response.status) !== -1) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        // authenticationService.logout();
        // TODO logot service
        console.log("logout");
      }

      const error = (data && data.message) || response.statusText;
      // TODO toaster Display message
      console.log(data.message);
      return Promise.reject(error);
    }

    console.log(data.message);
    return data.data;
  });
};

export default handleResponse;
