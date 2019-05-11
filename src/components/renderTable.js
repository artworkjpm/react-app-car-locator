import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MapPin from "../images/car2go-pin.svg";

export class RenderTable extends Component {
  constructor(props) {
    super(props);
    this.toggleContent = this.toggleContent.bind(this);
    this.state = {
      showContent: false,
      dropDown: false
    };
  }

  toggleContent(event) {
    event.preventDefault();
    this.setState({
      showContent: !this.state.showContent,
      dropDown: !this.state.dropDown
    });
  }

  render() {
    const { content } = this.props;
    const { ind } = this.props;
    const { showContent } = this.state;
    return (
      <div className="carswrapper">
        <div className="cars">
          <div className="row">
            <div className="column-left">
              <p>
                <span className="pattern">{ind + 1}</span>
              </p>
              <p>
                {content.interior === "GOOD" ? (
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
                {content.exterior === "GOOD" ? (
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
                <span className="bold">{content.name}</span>
              </p>

              <div className="map-pin-wrapper">
                <div className="map-pin-img">
                  <img src={MapPin} width="20" className="map-pin" />
                </div>
                <p className="map-pin-p">{content.address}</p>
              </div>

              <p
                onClick={this.toggleContent}
                className={`more {showContent === true ? downArrow : ""}`}
              >
                More info{" "}
                {showContent === true ? (
                  <FontAwesomeIcon icon="chevron-down" />
                ) : (
                  <FontAwesomeIcon icon="chevron-right" />
                )}
              </p>
              {showContent === true ? (
                <div>
                  <p className="info">
                    <span className="bold">ID: </span>
                    {content.id}
                  </p>
                  <p className="info">
                    <span className="bold">Fuel: </span>
                    {content.fuel}
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
  }
}

export default RenderTable;
