import axios from 'axios';
import { getAuthCookie, eraseAuthCookie } from 'utils/cookie';
import { logout } from 'utils/auth';

const cRequest = axios.create({
  baseURL: 'http://54.254.26.72:8081',
  headers: { 'Request-Origin': 'congtroi.org' },
});

// cRequest.defaults.headers.common['content-type'] = 'application/json';
// cRequest.defaults.headers.get['content-type'] = 'application/json';
// cRequest.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

cRequest.interceptors.request.use(config => {
  const accessToken = getAuthCookie();
  // checking if accessToken exists
  if (accessToken) {
    config.headers.Authorization = accessToken;
  }
  return config;
});

cRequest.interceptors.response.use(
  response => response,
  async error => {
    // extracting response and config objects
    const { response, config } = error;
    // checking if error is Aunothorized error
    if (response.status === 401) {
      eraseAuthCookie();
      //   let refreshToken = localStorage.getItem("refreshToken");
      //   if (refreshToken) {
      //     //if refresh token exists in local storage proceed
      //     try {
      //       //try refreshing token
      //       const data = await cRequest.post("/refresh/", {
      //         refresh: refreshToken,
      //       });
      //       let accessToken = data.data.accessToken;
      //       if (accessToken) {
      //         //if request is successiful and token exists in response data
      //         //store it in local storage
      //         localStorage.setItem("accessToken", accessToken);
      //         //with new token retry original request
      //         config.headers["Authorization"] = accessToken;
      //         return cRequest(config);
      //       }
      //     } catch (e) {
      //       console.log(e);
      //     }
      //   }
      logout();
    }

    if (response.status === 400) {

    }

    if (response.status === 500 ) {
      // setError(response);
      // refreshPage();
    }

    return Promise.resolve(response);
  },
);

export default cRequest;
