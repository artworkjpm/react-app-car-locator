import React, { Component } from "react";
import MyTaxiData from "../data/mytaxi/vehicles.json";
import MyTaxiTable from "./myTaxiTable.js";
import "./stylesheets/Main.scss";
import "./stylesheets/my-taxi.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MtLogo from "../images/my-taxi-logo.svg";

export class MyTaxiMain extends Component {
  render() {
    return (
      <div className="component-wrapper">
        <div className="wrapper-main wrapper-main-my-taxi">
          <div className="header-main my-taxi">
            <div className="header">
              <div className="row">
                <div className="column-left">
                  <img src={MtLogo} width="120" alt="mytaxi logo" />
                </div>
                <div className="column-right">
                  <span className="pattern black-bg">
                    {MyTaxiData.poiList.length}
                  </span>
                  <b>Taxis available</b>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            {MyTaxiData.poiList.map((content, index) => {
              return <MyTaxiTable content={content} ind={index} key={index} />;
            })}
          </div>
          <div className="explain my-taxi">
            <div className="row">
              <div className="column-left">
                <p>
                  <span className="pattern black-bg">1</span>
                </p>

                <p>
                  <span className="pattern green">
                    <FontAwesomeIcon icon="check" />
                  </span>
                </p>

                <p>
                  <span className="pattern red">
                    <FontAwesomeIcon icon="times" />
                  </span>
                </p>
              </div>
              <div className="column-right">
                <p>Taxi number</p>
                <p>
                  <b>ACTIVE</b> status of taxi
                </p>
                <p>
                  <b>INACTIVE</b> status of taxi
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
