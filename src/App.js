import React, { useState } from "react";
import Main from "./Main";
import Alert from "./Alert";

export const CoolContext = React.createContext()

function App() {

  const [alert, setAlert] = useState(false)

  return (
    <CoolContext.Provider value={alert}>
      <div className={'container pt-3'}>
        <Alert />
        <Main />
      </div>
    </CoolContext.Provider>
  )
}

export default App;
