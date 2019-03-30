import { createStore, applyMiddleware, compose } from "redux"
import createHistory from "history/createBrowserHistory"
import { persistStore, persistReducer } from "redux-persist"
import { routerMiddleware } from "react-router-redux"
import {
  seamlessImmutableReconciler,
  seamlessImmutableTransformCreator
} from "redux-persist-seamless-immutable"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web and AsyncStorage for react-native
import thunk from "redux-thunk"
//
import rootReducer from "./reducer"

// Our history syncs our browserHistory with our store and must be exported so we can use it within our routes later.
const history = createHistory()

// enhancers, we will use this for dev tools extension.
const enhancers = []
// these are middlewares.
const middleware = [thunk, routerMiddleware(history)]

// we will use dev tools if and only if the environment is on development.
if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware), // it returs store enhancer
  ...enhancers
)

// Init app from local storage (at least, login stuff)
const persistConfig = {
  key: "winetasting",
  storage,
  stateReconciler: seamlessImmutableReconciler,
  // transforms: [
  //   seamlessImmutableTransformCreator({
  //     whitelistPerReducer: {
  //       reducerA: ["login"]
  //     }
  //   })
  // ],
  // whitelist: ["login"]
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

// creating store.
const store = createStore(persistedReducer, {}, composedEnhancers)

// creating store -> localstorage saver
const persistor = persistStore(store)

export { store as default, history, persistor }
