import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllContactsScreen from "./Screens/AllContactsScreen";
import NewContactScreen from "./Screens/NewContactScreen";
import EditContactScreen from "./Screens/EditContactScreen";
import NavBar from "./components/Navbar/Navbar";
import MapsAndGraphsScreen from "./Screens/MapAndGraphsScreen";

function App() {
  return (
    <div className="flex">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" Component={AllContactsScreen} />
          <Route path="/mapsAndGraphs" Component={MapsAndGraphsScreen} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
