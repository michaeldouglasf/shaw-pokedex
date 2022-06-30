import React, { useState } from 'react';
import './App.css';
import Router from './route/Router';
import {GlobalStates} from './context'


function App() {
  const [state, setState] = useState("index")
  return (
   <GlobalStates.Provider value={[state, setState]}>
      <Router/>
   </GlobalStates.Provider>
  );
}

export default App;
