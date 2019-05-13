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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    //this.isMainClicked = this.isMainClicked.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      isMainClicked: false
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  handleClick() {
    alert("from app.js");
    this.setState({ isMainClicked: true });
  }

  render() {
    return (
      <div className="App">
        <Main handleClick={this.handleClick} />
        <MyTaxiMain handleClick={this.handleClick} />
        <MapContainer
          isMainClicked={this.state.isMainClicked}
          showingInfoWindow={this.state.showingInfoWindow}
          activeMarker={this.state.activeMarker}
          selectedPlace={this.state.selectedPlace}
          onMarkerClick={this.onMarkerClick}
        />
      </div>
    );
  }
}

export default App;
