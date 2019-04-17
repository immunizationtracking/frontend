import React from "react";
import getName from "./CardsList";

// const patient = getName(name);

const Maxcard = props => {
  //   console.log(props.match.params.name);
  //   console.log(props.patients);
  // TO DO THIS SET UP ANOTHER AXIOS CALL TO GET PATIENTS IN HERE
  //   const pickpatient = name => {
  //     for (let i = 0; i < props.patients.length; i++) {
  //       if (props.patients[i] === name) {
  //         return props.patient[i];
  //       }
  //     }
  //   };

  console.log(props);
  return (
    <div>
      <div>{props.state.patients.name}</div>
    </div>
  );
};

export default Maxcard;
