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
    //this.handleClick = this.handleClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      isMainClicked: false
    };
  }

  handleClick(props, marker, e) {
    alert("from handleclick");
    this.setState({
      selectedPlace: props,
      showingInfoWindow: true
    });
  }
  onMarkerClick(props, marker, e) {
    //const text = "john is a nob";
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    alert(props.showingInfoWindow);
    console.log(props.selectedPlace);
  }
  render() {
    const props = this.props;
    return (
      <div className="App">
        <Main
          shoot={this.onMarkerClick.bind(this)}
          marker={this.props.activeMarker}
          visible={this.props.showingInfoWindow}
          selectedPlace={this.props.selectedPlace}
        />
        <MyTaxiMain shoot={this.handleClick.bind(this)} selectedPlace={props} />
        <MapContainer
          isMainClicked={this.state.isMainClicked}
          showingInfoWindow={this.state.showingInfoWindow}
          activeMarker={this.state.activeMarker}
          selectedPlace={this.state.selectedPlace}
          onMarkerClick={this.onMarkerClick.bind(this)}
        />
      </div>
    );
  }
}

export default App;
