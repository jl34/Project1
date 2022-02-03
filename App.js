import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from "react";
import "./App.css";
import Main from "./Main";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};



export default App;
