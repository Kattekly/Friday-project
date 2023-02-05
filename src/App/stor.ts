import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { loginReducer } from '../features/Login/login-reducer'
import { profileReducer } from '../features/Profile/profile-reducer'
import { signUpReducer } from '../features/SignUp/signUp-reducer'

import { appReducer } from './app-reducer'

const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  signUp: signUpReducer,
  profile: profileReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store
