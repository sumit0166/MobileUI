

import { useState } from 'react';
import './App.css';
import NavBottom from './NavBottom/NavBottom'
import Dashboard from './Body/Dashboard/Dashboard';


function App() {

  const [active,setActive] = useState(1)

  return (
    <div className="App">

      <div className="app-cont">
        {active === 1 ? <Dashboard />: null}
      </div>

      <NavBottom navActive={{active,setActive}}></NavBottom>
    </div>
  );
}

export default App;
