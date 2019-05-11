import React, { Component } from "react";
import MyTaxiData from "../data/mytaxi/vehicles.json";
import MyTaxiTable from "./myTaxiTable.js";
import "./stylesheets/Main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class MyTaxiMain extends Component {
  render() {
    return (
      <div className="component-wrapper">
        <div className="wrapper-main">
          <div className="header-main">
            <h1 className="center">
              <FontAwesomeIcon icon="car" />
              MyTaxi
            </h1>
            <div className="header">
              <div className="row">
                <div className="column-left">
                  <p className="available">
                    <span className="pattern">{MyTaxiData.poiList.length}</span>
                  </p>
                </div>
                <div className="column-right">
                  <p className="available">Taxis available in your area</p>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            {MyTaxiData.poiList.map((content, index) => {
              return <MyTaxiTable content={content} ind={index} key={index} />;
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

export default MyTaxiMain;
