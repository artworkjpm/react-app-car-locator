import React from "react";
import "./App.css";
import Main from "./components/main";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCar,
  faChevronDown,
  faChevronRight,
  faThumbsDown,
  faThumbsUp,
  faMapMarker
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCar,
  faChevronDown,
  faChevronRight,
  faThumbsDown,
  faThumbsUp,
  faMapMarker
);

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
