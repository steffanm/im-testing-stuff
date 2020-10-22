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

// const { register, handleSubmit, watch, errors } = useForm();

// export default function App() {
// // export default class App extends React.PureComponent {
//   onSubmit(data) {
//     console.log(data);

//     // this.setState({ isOpen: true });
//   }
//   classes = classNames(
//     Classes.CARD,
//     Classes.ELEVATION_4,
//     OVERLAY_EXAMPLE_CLASS
//   );

//   state = {
//     isOpen: false,
//   };
//   render() {
//     const { register, handleSubmit, watch, errors } = useForm();
//     return (
//       <div>
//         <form onSubmit={handleSubmit(this.onSubmit)}>
//           <input name="caseID" defaultValue="test" ref={register} />
//           <input type="date" name="date" ref={register} />

//           <p></p>
//           <input name="more data" ref={register({ required: true })} />
//           <p></p>

//           <input type="text" placeholder="stuff" name="email" ref={register} />

//           {errors.exampleRequired && <span>This field is required</span>}
//           <input type="submit" />
//         </form>

//         <Overlay
//           //onClose={this.handleClose}
//           className={Classes.OVERLAY_SCROLL_CONTAINER}
//           // isOpen={false}
//           {...this.state}
//         >
//           <div className={this.classes}>
//             <H3>I'm an Overlay!</H3>
//             <p>
//               This is a simple container with some inline styles to position it
//               on the screen. Its CSS transitions are customized for this example
//               only to demonstrate how easily custom transitions can be
//               implemented.
//             </p>
//             <p>
//               Click the "Focus button" below to transfer focus to the "Show
//               overlay" trigger button outside of this overlay. If persistent
//               focus is enabled, focus will be constrained to the overlay. Use
//               the <Code>tab</Code> key to move to the next focusable element to
//               illustrate this effect.
//             </p>
//             <p>
//               Click the "Make me scroll" button below to make this overlay's
//               content really tall, which will make the overlay's container (but
//               not the page) scrollable
//             </p>
//             <br />
//             <div className={Classes.DIALOG_FOOTER_ACTIONS}>
//               <Button
//                 intent={Intent.DANGER}
//                 //onClick={this.handleClose}
//                 style={{ margin: "" }}
//               >
//                 Close
//               </Button>
//               <Button style={{ margin: "" }}>Focus button</Button>
//               <Button
//                 // onClick={this.toggleScrollButton}
//                 icon="double-chevron-down"
//                 rightIcon="double-chevron-down"
//                 //active={this.state.useTallContent}
//                 style={{ margin: "" }}
//               >
//                 Make me scroll
//               </Button>
//               <Button
//                 intent={Intent.DANGER}
//                 //onClick={this.handleClose}
//                 style={{ margin: "" }}
//               >
//                 Close
//               </Button>
//             </div>
//           </div>
//         </Overlay>
//       </div>
//     );
//   }
// }

// class handleChange extends App() {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = { value: "testing stuff here" };
//   }

//   handleChange(e) {
//     this.setState({ value: e.target.value });
//   }
// }

export default function App() {
  // was testing constructor it doesnt go here
  // constructor() {
  //   super()

  //   this.state = {
  //     caseID: "",
  //     date: "",
  //     moreData: "",
  //     email: ""
  //   }
  // }

  // const onSubmit = (data) => {
  function onSubmit(data) {
    console.log(data);
    // need function to define state first then call function to
    // this.setState({ [name]: value });
    // this.setState({ isOpen: true });
  }

  const classes = classNames(
    Classes.CARD,
    Classes.ELEVATION_4,
    OVERLAY_EXAMPLE_CLASS
  );

  const { register, handleSubmit, watch, errors } = useForm();
  //  <form onSubmit={handleSubmit(onSubmit)}
  return (
    <div>
      <Header />
      <p></p>
      <form>
        <input name="participantsName" defaultValue="name" ref={register} />
        <input type="date" name="date" ref={register} />
        <button>Search</button>
      </form>
      <form>
        <text>testing</text>
      </form>

      <MyOverlay></MyOverlay>
    </div>
  );
}

// class Test1 extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       caseID: "",
//       date: "",
//       moreData: "",
//       email: "",
//     };
//   }
// }

// function MyOverlay() {
// const methods = useForm({ defaultValues });
// const { handleSubmit } = methods;
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
    console.log("i am here");
    this.setState({ isOpen: true });
  }
  setisClosed() {
    console.log("i not here");
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.setisOpen.bind(this)}>
          create new participant
        </button>

        <Overlay
          //onClose={this.handleClose}
          className={Classes.OVERLAY_SCROLL_CONTAINER}
          // isOpen={false}
          {...this.state}
        >
          <div className={this.classes}>
            <H3>Participant Create Modal</H3>
            <p></p>
            <input name="name" defaultValue="your name" />
            <p></p>
            <input name="address" defaultValue="address" />
            <p></p>
            <input name="dob" defaultValue="date of birth" />
            <br />
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
              <p></p>
              <Button
                // onClick=some how store data in state
                icon="double-chevron-down"
                //active={this.state.useTallContent}
                style={{ margin: "" }}
              >
                Save User data
              </Button>
              <Button
                intent={Intent.DANGER}
                //onClick={this.handleClose}
                style={{ margin: "" }}
                onClick={this.setisClosed.bind(this)}
              >
                Close
              </Button>
            </div>
          </div>
        </Overlay>
      </div>
    );
  }
}
