import React, { Component } from "react";
import Car2go from "../data/car2go/vehicles.json";
import RenderTable from "./renderTable.js";
import "./stylesheets/Main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carlogo from "../images/car-logo.svg";

export class Main extends Component {
  constructor(props) {
    super(props);
    // this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      marker: props
    };
  }
  /*  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  } */

  /*  triggerMarker(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    this.props.bang(this.state.selectedPlace);
  } */

  bang() {
    this.props.shoot(this.state.marker);
  }
  render() {
    //const props = this.props;
    return (
      <div className="component-wrapper">
        <div className="wrapper-main">
          <div className="header-main">
            <div className="header">
              <div className="row">
                <div className="column-left">
                  <img src={Carlogo} width="80" alt="car2go logo" />
                </div>
                <div className="column-right">
                  <span className="pattern">{Car2go.placemarks.length}</span>
                  <b>Cars available</b>
                </div>
              </div>
            </div>
          </div>
          <div className="car2go wrapper">
            {Car2go.placemarks.map((content, index) => {
              return (
                <RenderTable
                  content={content}
                  ind={index}
                  key={content.id}
                  bang={this.bang.bind(this)}
                  title={(index + 1).toString()}
                  name={content.name}
                  interior={content.interior}
                  exterior={content.exterior}
                  type="car2go"
                  position={{
                    lat: content.coordinates[1],
                    lng: content.coordinates[0]
                  }}
                />
              );
            })}
          </div>
          <div className="explain">
            <div className="row">
              <div className="column-left">
                <p>
                  <span className="pattern">1</span>
                </p>

                <p>
                  <span className="pattern green">
                    <FontAwesomeIcon icon="thumbs-up" />
                  </span>
                </p>

                <p>
                  <span className="pattern red">
                    <FontAwesomeIcon icon="thumbs-down" />
                  </span>
                </p>
              </div>
              <div className="column-right">
                <p>Car number</p>
                <p>
                  <b>Interior</b> of car (rated good)
                </p>
                <p>
                  <b>Exterior</b> of car (rated bad)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
