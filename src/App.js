import React from "react";
import "./App.scss";
import MapContainer from "./components/map";
import Main from "./components/main";
import MyTaxiMain from "./components/myTaxiMain";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCar,
  faChevronDown,
  faChevronRight,
  faThumbsDown,
  faThumbsUp,
  faMapMarker,
  faCheck,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCar,
  faChevronDown,
  faChevronRight,
  faThumbsDown,
  faThumbsUp,
  faMapMarker,
  faCheck,
  faTimes
);

function App() {
  return (
    <div className="App">
      <Main />
      <MyTaxiMain />
      <MapContainer />
    </div>
  );
}

export default App;
