import React, { useMemo, useState } from "react";
import DefaultRoute from "./routes/default";
import LOLUserNameContext from "./context/LOLUserNameContext";
import { Routes, BrowserRouter, useNavigate } from "react-router-dom";
import ILOLUserName from "./interface/ILOLUserName";
import 'bulma/css/bulma.min.css';
import './index.css'


function App() {
  const [LOLuser, setLOLUser] = useState<ILOLUserName>();
  const providerValue = useMemo(
    () => [LOLuser, setLOLUser],
    [LOLuser, setLOLUser]
  );

  return (
    <BrowserRouter>
      <LOLUserNameContext.Provider value={providerValue}>
        {DefaultRoute}
      </LOLUserNameContext.Provider>
    </BrowserRouter>
  );
}

export default App;
