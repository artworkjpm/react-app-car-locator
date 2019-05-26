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
      markerName: null
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState(
      {
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      },
      this.callName
    );
  }

  callName() {
    this.setState({
      markerName: this.state.selectedPlace.name
    });
  }

  render() {
    return (
      <div className="App">
        <Car2GoMain
          selectedPlace={this.state.selectedPlace}
          //activeMarker={this.state.activeMarker}
          handleClick={this.onMarkerClick}
          //showingInfoWindow={this.state.showingInfoWindow}
        />
        <MyTaxiMain />
        <MapContainer
          selectedPlace={this.state.selectedPlace}
          activeMarker={this.state.activeMarker}
          showingInfoWindow={this.state.showingInfoWindow}
          handleClick={this.onMarkerClick}
          markerName={this.state.markerName}
        />
      </div>
    );
  }
}

export default App;
