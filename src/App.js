import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Section from './MainSection.js';
function App() {
  return (
    <div>
      <Header/>
      <Section/>
      <Sidebar/>
    </div>
  );
}

export default App;