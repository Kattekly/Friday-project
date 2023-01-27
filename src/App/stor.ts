import {combineReducers, legacy_createStore} from "redux";
import {appReducer} from "./app-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    login: loginReducer,
    signUp: signUpReducer,
    profile: profileReducer
})

export const store = legacy_createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
