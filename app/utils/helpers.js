import * as Paths from "constants/routes"
import * as Storages from "constants/storage"
import {useHistory} from "react-router-dom";

// Handle variables
export const isObject = obj => obj ? obj.constructor === Object && Object.keys(obj).length > 0 : false;
export const isArray = arr => arr ? arr.constructor === Array && arr.length > 0 : false;
export const isEmptyVar = mVar => {
    if(!mVar) return true;
    return mVar === '' ||  mVar === '[]' || mVar === '{}';
}
export const getEmptyVar = mVar => {
    if(!mVar) return undefined;
    switch(mVar.constructor) {
        case Object:
            return {};
        case Array:
            return [];
        default:
            return '';
    }
}
export const isJson = mStr => {
    try {
        JSON.parse(mStr);
    } catch (e) {
        return false;
    }
    return true;
}

export const getObjectValueById = (obj,id) => {
  try{
    return obj[id] ? obj[id] : '';
  } catch(err){
    return '';
  }
};

// Handle urls
export const redirectTo = name => {
    window.location.href = name;
}
export const redirectBack = value => {
  const history = useHistory();
  history.goBack();
}
export const redirectHome = () => {
    redirectTo(Paths.ROUTE_HOME);
}
export const redirectLogin = () => {
    redirectTo(Paths.ROUTE_LOGIN);
}

export const refreshPage = () => {
    window.location.reload(false);
}

export const getParamUrl = (name,cUrl = '') => {
    try{
        const url = cUrl ? cUrl : window.location.search;
        const queryParams = new URLSearchParams(url);
        return queryParams.get(name);
    } catch(err) {
        return '';
    }

}

//Handle Errors
export const setError = error => {
    localStorage.setItem(Storages.STORAGE_ERROR, JSON.stringify(error));
}

export const cacthError = error => {
    console.log(error);
}

export const cacthResponse = res => {
    console.log(res);
}

export const getError = () => {
    try{
        const error = localStorage.getItem(Storages.STORAGE_ERROR);
        return JSON.parse(error);
    } catch(err) {
        return '';
    }
}

export const getResErrorCode = res => {
    try{
        return res.data.error_code;
    } catch(err) {
        return 'DEFAULT';
    }
}

export const getResStatus = res => {
    try{
        return res.status;
    } catch(err) {
        return '';
    }
}

export const getErrorCode = () => {
    try{
        const error = getError();
        return getResError(error.data.error_code);
    } catch(err) {
        return '';
    }
}

export const removeError = () => {
    localStorage.removeItem(Storages.STORAGE_ERROR);
}