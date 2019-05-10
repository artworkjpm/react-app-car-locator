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
        <div className="header">
          <div className="row">
            <div className="column-left">
              <p className="available">
                <span className="pattern">{Car2go.placemarks.length}</span>
              </p>
            </div>
            <div className="column-right">
              <p className="available">Cars available in your area</p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          {Car2go.placemarks.map((content, index) => {
            return <RenderTable content={content} ind={index} key={index} />;
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
    );
  }
}

export default Main;
