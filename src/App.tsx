import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllContactsScreen from "./Screens/AllContactsScreen";
import NewContactScreen from "./Screens/NewContactScreen";
import EditContactScreen from "./Screens/EditContactScreen";
import NavBar from "./components/Navbar/Navbar";
import MapsAndGraphsScreen from "./Screens/MapAndGraphsScreen";

function App() {
  console.log("hiii");

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" Component={AllContactsScreen} />
        <Route path="/mapsAndGraphs" Component={MapsAndGraphsScreen} />
      </Routes>
    </Router>
  );
}

export default App;
