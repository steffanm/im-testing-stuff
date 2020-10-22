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

import ParticipantCreationModal from "./participant-creation-modal";

const OVERLAY_EXAMPLE_CLASS = "docs-overlay-example-transition";

const myDummyData = [
  {
    participantName: "William",
    dob: "2020-10-22T18:48:36+00:00",
    address: "1234 Home Street",
  },
  {
    participantName: "William",
    dob: "2020-10-22T18:48:36+00:00",
    address: "1234 Home Street",
  },
  {
    participantName: "William",
    dob: "2020-10-22T18:48:36+00:00",
    address: "1234 Home Street",
  },
  {
    participantName: "William",
    dob: "2020-10-22T18:48:36+00:00",
    address: "1234 Home Street",
  },
  {
    participantName: "William",
    dob: "2020-10-22T18:48:36+00:00",
    address: "1234 Home Street",
  },
];

export default function App() {
  function onSubmit(data) {
    console.log(data);
  }

  const classes = classNames(
    Classes.CARD,
    Classes.ELEVATION_4,
    OVERLAY_EXAMPLE_CLASS
  );

  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <div>
      <Header />
      <p></p>
      <form>
        <input name="participantsName" defaultValue="name" ref={register} />
        <input type="date" name="date" ref={register} />
        <button>Search</button>
      </form>
      <p>I will oneday display some dynamic data</p>

      <ParticipantCreationModal></ParticipantCreationModal>
      <h3>Search Results</h3>
    </div>
  );
}
