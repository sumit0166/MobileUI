import React from 'react'
import {Home,Activity, AddCircle, Setting2, CalendarTick} from 'iconsax-react'
import './NavBottom.css';

function NavBottom({navActive}) {
  return (
    <div className="NavBottom">
      <Home size="32"  variant={navActive.active === 1 ? "Bold":"Linear"} onClick={() => navActive.setActive(1)}/>
      <Activity size="32" variant={navActive.active === 2 ? "Bold":"Linear"} onClick={() => navActive.setActive(2)}/>
      <AddCircle style={{position:'relative',top:'-20px'}} size="64" variant='Bold' onClick={() => navActive.setIsAdd(true)} />
      <CalendarTick size="32" variant={navActive.active === 4 ? "Bold":"Linear"} onClick={() => navActive.setActive(4)}/>
      <Setting2 size="32" variant={navActive.active === 5 ? "Bold":"Linear"} onClick={() => navActive.setActive(5)}/>
    </div>
  );
}

export default NavBottom;
