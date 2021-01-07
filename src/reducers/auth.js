import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, LOGOUT_FAIL, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS } from "../actions/actions-type"
import { models } from "../models"
const initState = {
    token: null,
    error: false,
    userId: null
}

export default authReducer = (state = initState, action) => {
    //set user if token doesn't expire yet
    const userInformation = async () => {
        // const token = await AsyncStorage.getItem("token");        
        const token = await models.getToken();;

        if (!token) {
            return state;
        }
        return (state.token = token);
    };
    userInformation();
    const { type, data, error } = action
    switch (type) {
        case LOGIN: {
            return Object.assign({}, state, {
                token: null,
            });
        }
        case LOGIN_SUCCESS: {
            return Object.assign({}, state, {
                token: data.token ? data.token : null
            });
        }
        case LOGIN_FAIL: {
            return error;
        }
        case REGISTER_SUCCESS: {
            return Object.assign({}, state, {
                userId: data.userId ? data.userId : null
            });
        }
        case REGISTER_FAIL: {
            return error;
        }
        case LOGOUT: {
            return Object.assign({}, state);
        }
        case LOGOUT_SUCCESS: {
            return Object.assign({}, state, {
                token: null
            });
        }
        case LOGOUT_FAIL: {
            return error;
        }
        default: {
            return state
        }
    }
}