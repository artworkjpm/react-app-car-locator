import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Car2go from "../data/car2go/vehicles.json";
import MyTaxiData from "../data/mytaxi/vehicles.json";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./stylesheets/map.scss";

export class MapContainer extends Component {
  /* constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }*/
  /*  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  } */
  render() {
    const google = window.google;
    const style = {
      width: "100%",
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
            lat: 53.5511,
            lng: 9.9937
          }}
          zoom={13}
        >
          {Car2go.placemarks.map((content, index) => {
            return (
              <Marker
                title={(index + 1).toString()}
                name={content.name}
                interior={content.interior}
                exterior={content.exterior}
                type="car2go"
                position={{
                  lat: content.coordinates[1],
                  lng: content.coordinates[0]
                }}
                onClick={this.props.onMarkerClick}
                icon={{
                  url: require("../images/car2go-pin.svg"),
                  anchor: new google.maps.Point(5, 58)
                }}
                key={content.id}
              />
            );
          })}
          {/* {MyTaxiData.poiList.map((content, index) => {
            return (
              <Marker
                title={(index + 1).toString()}
                name={content.id}
                type="my-taxi"
                position={{
                  lat: content.coordinate.latitude,
                  lng: content.coordinate.longitude
                }}
                onClickCapture={this.props.onMarkerClick}
                icon={{
                  url: require("../images/my-taxi-pin.svg"),
                  anchor: new google.maps.Point(5, 58)
                }}
                key={content.id}
                activetaxi={content.state}
              />
            );
          })} */}

          <InfoWindow
            marker={this.props.activeMarker}
            visible={this.props.showingInfoWindow}
            selectedPlace={this.props.selectedPlace}
          >
            <div>
              <p>
                <span className="pattern">
                  {this.props.selectedPlace.title}
                </span>
                <span>
                  <b>{this.props.selectedPlace.name}</b>
                </span>
                {/* {this.props.selectedPlace.interior === "GOOD" ? (
                  <span className="pattern green">
                    <FontAwesomeIcon icon="thumbs-up" />
                  </span>
                ) : (
                  ""
                )}

                {this.props.selectedPlace.interior === "UNACCEPTABLE" ? (
                  <span className="pattern red">
                    <FontAwesomeIcon icon="thumbs-down" />
                  </span>
                ) : (
                  ""
                )}

                {this.props.selectedPlace.activetaxi === "ACTIVE" ? (
                  <span className="pattern green">
                    <FontAwesomeIcon icon="check" />
                  </span>
                ) : (
                  ""
                )}
                {this.props.selectedPlace.activetaxi === "INACTIVE" ? (
                  <span className="pattern red">
                    <FontAwesomeIcon icon="times" />
                  </span>
                ) : (
                  ""
                )}

                {this.props.selectedPlace.type === "my-taxi" ? (
                  <span className="pattern black-bg">
                    {this.props.selectedPlace.title}{" "}
                  </span>
                ) : (
                  <span className="pattern">
                    {this.props.selectedPlace.title}
                  </span>
                )}
              </p>
              <p>
                {this.props.selectedPlace.exterior === "GOOD" ? (
                  <span className="pattern green">
                    <FontAwesomeIcon icon="thumbs-up" />
                  </span>
                ) : (
                  ""
                )}

                {this.props.selectedPlace.exterior === "UNACCEPTABLE" ? (
                  <span className="pattern red">
                    <FontAwesomeIcon icon="thumbs-down" />
                  </span>
                ) : (
                  ""
                )}
                <span>
                  <b>{this.props.selectedPlace.name}</b>
                </span> */}
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
