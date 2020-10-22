import * as React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import "./styles.css";
import Header from "./Header";

import "@blueprintjs/core/lib/css/blueprint.css";
import {
  Button,
  Classes,
  Code,
  Divider,
  H3,
  H5,
  Intent,
  Overlay,
  Switch,
} from "@blueprintjs/core";
import {
  Example,
  handleBooleanChange,
  handleValueChange,
  IExampleProps,
} from "@blueprintjs/docs-theme";

const OVERLAY_EXAMPLE_CLASS = "docs-overlay-example-transition";

class MyOverlay extends React.Component {
  classes = classNames(
    Classes.CARD,
    Classes.ELEVATION_4,
    OVERLAY_EXAMPLE_CLASS
  );

  state = {
    isOpen: false,
  };
  setisOpen() {
    this.setState({ isOpen: true });
  }
  setisClosed() {
    const myNextState = { isOpen: false, ImTotallyNewStateRightHere: 123123 };
    this.setState(myNextState);
  }

  yourNameHandler = (event) => {
    this.setState({
      yourName: event.target.value,
    });
  };
  addressHandler = (event) => {
    this.setState({
      address: event.target.value,
    });
  };
  dateOfBirthHandler = (event) => {
    this.setState({
      dateOfBirth: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.setisOpen.bind(this)}>
          create new participant
        </button>

        <Overlay className={Classes.OVERLAY_SCROLL_CONTAINER} {...this.state}>
          <div className={this.classes}>
            <H3>Participant Create Modal</H3>
            <p></p>
            <form>
              <input
                name="name"
                onChange={this.yourNameHandler}
                placeholder="yourName"
              />
              <p></p>
              <input
                name="address"
                onChange={this.addressHandler}
                placeholder="address"
              />
              <p></p>
              <input
                name="dob"
                onChange={this.dateOfBirthHandler}
                placeholder="dateOfBirth"
              />
              <br />
              <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                <p></p>
                <Button
                  icon="double-chevron-down"
                  type="submit"
                  style={{ margin: "" }}
                >
                  Save User data
                </Button>
                <Button
                  intent={Intent.DANGER}
                  style={{ margin: "" }}
                  onClick={this.setisClosed.bind(this)}
                >
                  Close
                </Button>
              </div>
            </form>
          </div>
        </Overlay>
      </div>
    );
  }
}

export default MyOverlay;
