import React from 'react';
import { ConnectedRouter } from "react-router-redux"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import ToastrProvider from "react-redux-toastr"

// importing store and history
import store, { history, persistor } from "./store"
import Routes from "./routes"
// import ThemeProvider from "theme"


const App = () => {
  return(
   
    <Provider store={store}>
      {/* Localstorage saver */}
      <PersistGate loading={null} persistor={persistor}>
        {/* Redux router init */}
        <ConnectedRouter history={history}>
            {/* Styled components theming */}
            {/* <ThemeProvider> */}
              <div>
                {/* All the app routes/pages */}
                <Routes />
                {/* Nice success/error notification popups */}
                <ToastrProvider progressBar timeOut={3000} showCloseButton />
              </div>
            {/* </ThemeProvider> */}
        </ConnectedRouter>
      </PersistGate>
    </Provider>
)}

export default App
