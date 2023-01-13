

import { useState } from 'react';
import './App.css';
import NavBottom from './NavBottom/NavBottom'
import Dashboard from './Body/Dashboard/Dashboard';
import Upload from './Body/Upload/Upload';

function App() {

  const [active,setActive] = useState(1)
  const [isAdd,setIsAdd] = useState(false)

  return (
    <div className="App">

      <div className="app-cont">
        {active === 1 && <Dashboard />}
      </div>

      <NavBottom navActive={{active,setActive, setIsAdd}}></NavBottom>
      {isAdd && <Upload setIsAdd={setIsAdd}/>}
    </div>
  );
}

export default App;
