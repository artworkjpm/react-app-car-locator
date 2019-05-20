import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Car2go from "../data/car2go/vehicles.json";
import MyTaxiData from "../data/mytaxi/vehicles.json";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./stylesheets/map.scss";

const MapContainer = props => {
  /* constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  } */

  const google = window.google;
  const style = {
    margin: "0 auto"
  };
  //const google = window.google;
  return (
    <div className="map-class">
      <Map
        google={props.google}
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
              onClick={props.handleClick}
              icon={{
                url: require("../images/car2go-pin.svg"),
                anchor: new google.maps.Point(5, 58)
              }}
              key={index}
            />
          );
        })}
        {MyTaxiData.poiList.map((TaxiData, index) => {
          return (
            <Marker
              title={(index + 1).toString()}
              name={TaxiData.id}
              type="my-taxi"
              position={{
                lat: TaxiData.coordinate.latitude,
                lng: TaxiData.coordinate.longitude
              }}
              onClick={props.handleClick}
              icon={{
                url: require("../images/my-taxi-pin.svg"),
                anchor: new google.maps.Point(5, 58)
              }}
              key={index}
              activetaxi={TaxiData.state}
            />
          );
        })}

        <InfoWindow
          marker={props.activeMarker}
          visible={props.showingInfoWindow}
        >
          <div>
            <p>
              {props.selectedPlace.interior === "GOOD" ? (
                <span className="pattern green">
                  <FontAwesomeIcon icon="thumbs-up" />
                </span>
              ) : (
                ""
              )}

              {props.selectedPlace.interior === "UNACCEPTABLE" ? (
                <span className="pattern red">
                  <FontAwesomeIcon icon="thumbs-down" />
                </span>
              ) : (
                ""
              )}

              {props.selectedPlace.activetaxi === "ACTIVE" ? (
                <span className="pattern green">
                  <FontAwesomeIcon icon="check" />
                </span>
              ) : (
                ""
              )}
              {props.selectedPlace.activetaxi === "INACTIVE" ? (
                <span className="pattern red">
                  <FontAwesomeIcon icon="times" />
                </span>
              ) : (
                ""
              )}

              {props.selectedPlace.type === "my-taxi" ? (
                <span className="pattern black-bg">
                  {props.selectedPlace.title}{" "}
                </span>
              ) : (
                <span className="pattern">{props.selectedPlace.title}</span>
              )}
            </p>
            <p>
              {props.selectedPlace.exterior === "GOOD" ? (
                <span className="pattern green">
                  <FontAwesomeIcon icon="thumbs-up" />
                </span>
              ) : (
                ""
              )}

              {props.selectedPlace.exterior === "UNACCEPTABLE" ? (
                <span className="pattern red">
                  <FontAwesomeIcon icon="thumbs-down" />
                </span>
              ) : (
                ""
              )}
              <span>
                <b>{props.selectedPlace.name}</b>
              </span>
            </p>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBLKOadUkRR6mX4J28tju1U8XB9ohNZA94"
})(MapContainer);
