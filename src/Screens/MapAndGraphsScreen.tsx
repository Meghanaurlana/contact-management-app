import React, { FC } from "react";
import ReactDOM from "react-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Dashboard from "./DashBoard";

const MapsAndGraphsScreen: FC = () => {
  return (
    <div>
      Maps and Graphs Screen
      <Dashboard />
    </div>
  );
};
export default MapsAndGraphsScreen;
