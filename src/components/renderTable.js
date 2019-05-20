import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MapPin from "../images/car2go-pin.svg";

const RenderTable = props => {
  return (
    <div className="carswrapper">
      <div className="cars">
        <div className="row">
          <div className="column-left">
            <p>
              <span className="pattern">{props.ind + 1}</span>
            </p>
            <p>
              {props.content.interior === "GOOD" ? (
                <span className="pattern green">
                  <FontAwesomeIcon icon="thumbs-up" />
                </span>
              ) : (
                <span className="pattern red">
                  <FontAwesomeIcon icon="thumbs-down" />
                </span>
              )}
            </p>
            <p>
              {props.content.exterior === "GOOD" ? (
                <span className="pattern green">
                  <FontAwesomeIcon icon="thumbs-up" />
                </span>
              ) : (
                <span className="pattern red">
                  <FontAwesomeIcon icon="thumbs-down" />
                </span>
              )}
            </p>
          </div>
          <div className="column-right">
            <p className="info">
              <span className="bold">{props.content.name}</span>
            </p>

            <div className="map-pin-wrapper">
              <div className="map-pin-img" name={props.content.name}>
                <img
                  src={MapPin}
                  width="20"
                  className="map-pin"
                  alt="map pin"
                />
              </div>
              <p className="map-pin-p">{props.content.address}</p>
            </div>

            <p
              onClick={props.handleToggle}
              className={`more {props.handleToggle.state.showContent === true ? downArrow : ""}`}
            >
              More info{" "}
              {props.handleToggle === true ? (
                <FontAwesomeIcon icon="chevron-down" />
              ) : (
                <FontAwesomeIcon icon="chevron-right" />
              )}
            </p>
            {props.handleToggle === true ? (
              <div>
                <p className="info">
                  <span className="bold">ID: </span>
                  {props.content.id}
                </p>
                <p className="info">
                  <span className="bold">Fuel: </span>
                  {props.content.fuel}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderTable;
