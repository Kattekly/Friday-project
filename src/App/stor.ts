import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {appReducer} from "./app-reducer";
import {loginReducer} from "../features/Login/login-reducer";
import {signUpReducer} from "../features/SignUp/signUp-reducer";
import {profileReducer} from "../features/Profile/profile-reducer";
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    app: appReducer,
    login: loginReducer,
    signUp: signUpReducer,
    profile: profileReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
