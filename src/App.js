import React from "react";
import "./App.scss";
import MapContainer from "./components/map";
import Car2GoMain from "./components/Car2GoMain";
import MyTaxiMain from "./components/myTaxiMain";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCar,
  faChevronDown,
  faChevronRight,
  faThumbsDown,
  faThumbsUp,
  faMapMarker,
  faCheck,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCar,
  faChevronDown,
  faChevronRight,
  faThumbsDown,
  faThumbsUp,
  faMapMarker,
  faCheck,
  faTimes
);

class App extends React.Component {
  /* constructor(props) {
    super(props);
  } */

  constructor(props) {
    super(props);
    this.state = {
      nameList: null
    };
  }

  shoot() {
    /*  this.setState({
      nameList: value
    }); */
    //alert(nameList);
    alert("cunt");
  }

  /* shoot() {
    alert("cunt");
  } */
  render() {
    return (
      <div className="App">
        <Car2GoMain
          nameList={this.state.nameList}
          shoot={this.shoot.bind(this)}
        />
        <MyTaxiMain />
        <MapContainer />
      </div>
    );
  }
}

export default App;
