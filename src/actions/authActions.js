import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS,LOGOUT, LOGOUT_FAIL, LOGOUT_SUCCESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "./actions-type"

export const login = (data) => {    
    return ({ type: LOGIN, data })
};
export const loginSuccess = (data) => {    
    return ({ type: LOGIN_SUCCESS, data })
};
export const loginFail = (error) => {
    return ({ type: LOGIN_FAIL, error })
};

export const register = (data) => {    
    return ({ type: REGISTER, data })
};
export const registerSuccess = (data) => {    
    return ({ type: REGISTER_SUCCESS, data })
};
export const registerFail = (error) => {
    return ({ type: REGISTER_FAIL, error })
};

export const logout = (params) => {    
    return ({ type: LOGOUT, params })
};
export const logoutSuccess = (data) => {    
    return ({ type: LOGOUT_SUCCESS, data })
};
export const logoutFail = (error) => {
    return ({ type: LOGOUT_FAIL, error })
};

