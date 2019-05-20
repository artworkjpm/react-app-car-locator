import React, { Component } from "react";
import "./App.scss";
import MapContainer from "./components/map";
import Car2GoMain from "./components/Car2GoMain";
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

class App extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      showContent: false
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  toggleContent = () => {
    this.setState({
      showContent: !this.state.showContent
    });
  };
  render() {
    return (
      <div className="App">
        <Car2GoMain
          handleClick={this.onMarkerClick}
          handleToggle={this.toggleContent}
        />
        <MyTaxiMain />
        <MapContainer
          selectedPlace={this.state.selectedPlace}
          activeMarker={this.state.activeMarker}
          showingInfoWindow={this.state.showingInfoWindow}
          handleClick={this.onMarkerClick}
        />
      </div>
    );
  }
}

export default App;
