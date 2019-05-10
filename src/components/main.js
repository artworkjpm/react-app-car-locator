import React, { Component } from "react";
import Car2go from "../data/car2go/vehicles.json";
import RenderTable from "./renderTable.js";
import "./stylesheets/Main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Main extends Component {
  render() {
    return (
      <div>
        <h1 className="center">
          <FontAwesomeIcon icon="car" />
          car2go
        </h1>
        <p className="available">
          {" "}
          <span className="pattern">{Car2go.placemarks.length}</span> Cars
          available in your area
        </p>
        <div className="wrapper">
          {Car2go.placemarks.map((content, index) => {
            return <RenderTable content={content} ind={index} key={index} />;
          })}
        </div>
        <div className="explain">
          <div class="row">
            <div class="column-left">
              <p>
                <span className="pattern">1</span>Number of cars
              </p>
              <p>
                <span className="pattern green">
                  <FontAwesomeIcon icon="thumbs-up" />
                </span>
                Interior of car
              </p>
              <p>
                <span className="pattern red">
                  <FontAwesomeIcon icon="thumbs-down" />
                </span>
                Exterior of car
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
