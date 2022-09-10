import React, { useState } from 'react';
import './App.css';
import SimpleMap from './features/map/SimpleMap';
import BottomNavigation from '@mui/material/BottomNavigation'         
import BottomNavigationAction from '@mui/material/BottomNavigationAction'         

function App() {

  const [value, setValue] = useState(0)
  return (
    <div className="app-container">
    <header className='header-container'>
    <p>Header container content</p>
    </header>
    <main className='main-container'>
      {/* <SimpleMap /> */}
    <p>Main container content</p>
    </main>
    <nav className='nav-container'>
    <BottomNavigation style={{height: "100%"}}
  showLabels
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
>
  <BottomNavigationAction label="Home" />
  <BottomNavigationAction label="Recents" />
  <BottomNavigationAction label="Favorites"/>
  <BottomNavigationAction label="Nearby"/>
  <BottomNavigationAction label="Profile"/>
</BottomNavigation>
    </nav>
    </div>
  );
}

export default App;
