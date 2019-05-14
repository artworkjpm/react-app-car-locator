import React, { Component } from "react";
import Car2go from "../data/car2go/vehicles.json";
import RenderTable from "./renderTable.js";
import "./stylesheets/Main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carlogo from "../images/car-logo.svg";

export class Main extends Component {
  constructor(props) {
    super(props);

    //this.isMainClicked = this.isMainClicked.bind(this);
    //this.handleClick = this.handleClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      isMainClicked: false
    };
  }
  render() {
    const props = this.props;
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
                  bang={props.shoot}
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
