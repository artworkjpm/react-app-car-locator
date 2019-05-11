import React, { Component } from "react";
import Car2go from "../data/car2go/vehicles.json";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./stylesheets/map.scss";

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
      height: "50%",
      margin: "0 auto"
    };
    //const google = window.google;
    return (
      <div className="map-class">
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
                className="marker-car2"
                title={index}
                name={content.name}
                position={{
                  lat: content.coordinates[1],
                  lng: content.coordinates[0]
                }}
                onClick={this.onMarkerClick}
                icon={{
                  url: require("../images/car2go-pin.svg"),
                  anchor: new google.maps.Point(5, 58)
                }}
              />
            );
          })}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <p className="pattern">{this.state.selectedPlace.title}</p>
              <p>
                <b>{this.state.selectedPlace.name}</b>
              </p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBLKOadUkRR6mX4J28tju1U8XB9ohNZA94"
})(MapContainer);
