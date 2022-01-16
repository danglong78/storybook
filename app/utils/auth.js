import {getAuthCookie,eraseAuthCookie,setAuthCookie,getCookie,setCookie,eraseCookie} from 'utils/cookie';
import {redirectLogin, isObject} from 'utils/helpers';
import {COOKIE_USER, COOKIE_TOKEN} from 'constants/cookie';

const isBrowser = typeof window !== `undefined`;

// User Object
// {
//   "request_id": "string",
//   "data": {
//     "name": "string",
//     "email": "string",
//     "role": "Customer",
//     "avatar": "string",
//     "created_at": "string",
//     "updated_at": "string",
//     "user_id": "string",
//     "active": false,
//     "is_extension": false
//   }
// }

export const getUser = () => {
  try{
    return JSON.parse(getCookie(COOKIE_USER));
  } catch(err){
    return {};
  }
};

export const getUserInfoById = id => {
  try{
    const mUser = getUser();
    return mUser[id];
  } catch(err){
    return '';
  }
};

export const getUserEmail = () => {
  const user = getUser();
  return user && user.data ? user.data.email : '';
};

export const updateUser = (data) => {
  const mUser = getUser();
  setUser(Object.assign(data, mUser));
};

export const setUser = user => isObject(user) ? setCookie(COOKIE_USER,JSON.stringify(user)) : eraseCookie(COOKIE_USER);
const getToken = () => getAuthCookie();
const setToken = accessToken => accessToken ? setAuthCookie(accessToken) : eraseCookie(COOKIE_TOKEN);

export const isLoggedIn = () => {
  if (!isBrowser) return false;

  const Token = getToken();

  return !!Token;
}

export const getCurrentUser = () => isBrowser && getUser()

export const getCurrentToken = () => isBrowser && getToken()

export const logout = () => {
  if (!isBrowser) return;
  setUser({});
  eraseAuthCookie();
  redirectLogin();
};

export const setUserData = res => {
  const user = res.data.data;
  const token = user.access_token;

  setUser(user);
  setToken(token);
}
