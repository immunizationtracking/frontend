import React from "react";
import MinCard from "./mincard";
class cardview extends React.Component {
  constructor() {
    super();
    this.state = {
      patients: [
        {
          name: "Kevin",
          DOB: "3/12/1987",
          MRN: "28945",
          sex: "male",
          last_visit: "10/20/2017"
        },
        {
          name: "Katie",
          DOB: "5/31/1992",
          MRN: "839210",
          sex: "female",
          last_visit: "1/24/2018"
        },
        {
          name: "Kahlua",
          DOB: "1/11/1991",
          MRN: "22222",
          sex: "alcohol",
          last_visit: "21/22/1908"
        }
      ]
    };
  }

  render() {
    console.log();
    return (
      <div>
        {this.state.patients.map(patient => {
          return <MinCard key={patient.name} patient={patient} />;
        })}
      </div>
    );
  }
}

export default cardview;
