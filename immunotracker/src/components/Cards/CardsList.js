import React from "react";
import MinCard from "./mincard";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Maxcard from "./maxcard";
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
          last_visit: "10/20/2017",
          selected: false
        },
        {
          name: "Katie",
          DOB: "5/31/1992",
          MRN: "839210",
          sex: "female",
          last_visit: "1/24/2018",
          selected: false
        },
        {
          name: "Kahlua",
          DOB: "1/11/1991",
          MRN: "22222",
          sex: "alcohol",
          last_visit: "21/22/1908",
          selected: false
        }
      ]
    };
  }
  selected = name => {
    this.state.patients.map(patient => {
      if (name === patient.name) {
        this.setState({
          ...this.state.patients,
          [this.state.patients.selected]: !patient.selected
        });

        patient.selected = !patient.selected;
      }
    });
  };
  render() {
    console.log();
    return (
      <div>
        {this.state.patients.map(patient => {
          return (
            <div>
              <MinCard
                key={patient.name}
                patient={patient}
                selected={this.selected}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default cardview;
