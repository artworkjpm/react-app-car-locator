import React, { Component } from "react";
import Car2go from "../data/car2go/vehicles.json";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      name: null
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    const google = window.google;
    const style = {
      width: "70%",
      height: "70%",
      margin: "0 auto"
    };
    //const google = window.google;
    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: 53.59301,
          lng: 10.07526
        }}
        zoom={12}
      >
        {Car2go.placemarks.map((content, index) => {
          return (
            <Marker
              title={index}
              name={index}
              position={{
                lat: content.coordinates[1],
                lng: content.coordinates[0]
              }}
              onClick={this.onMarkerClick}
            />
          );
        })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h2>{this.state.selectedPlace.name}</h2>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBLKOadUkRR6mX4J28tju1U8XB9ohNZA94"
})(MapContainer);
