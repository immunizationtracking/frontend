import React from "react";
import MinCard from "./mincard";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Maxcard from "./maxcard";
import axios from "axios";
import withAuth from "../../utils/withAuth";
import {
  Form,
  Input,
  TextArea,
  Checkbox,
  Radio,
  RadioGroup,
  Dropdown,
  Select
} from "formsy-semantic-ui-react";
import "./cardlistcss.css";

class cardview extends React.Component {
  constructor() {
    super();
    this.state = {
      newuser: {
        firstName: "",
        lastName: "",
        gender: "",
        dateOfBirth: "",

        patientUserId: 1
      },
      patients: [
        // {
        //   id: "0",
        //   name: "Kevin",
        //   DOB: "3/12/1987",
        //   MRN: "28945",
        //   sex: "male",
        //   last_visit: "10/20/2017",
        //   selected: false
        // },
        // {
        //   id: "1",
        //   name: "Katie",
        //   DOB: "5/31/1992",
        //   MRN: "839210",
        //   sex: "female",
        //   last_visit: "1/24/2018",
        //   selected: false
        // },
        // {
        //   id: "2",
        //   name: "Kahlua",
        //   DOB: "1/11/1991",
        //   MRN: "22222",
        //   sex: "alcohol",
        //   last_visit: "21/22/1908",
        //   selected: false
        // }
      ]
    };
  }
  componentDidMount() {
    const token = withAuth();
    console.log(token);
    axios
      .get(`https://immunization-tracker.herokuapp.com/api/patients/`, token)
      .then(res => {
        console.log(res);
        this.setState(() => ({ patients: res.data.patients }));

        console.log("THIS IS THE NEW: ", res.data.patients);
      })
      .catch(error => {
        console.log(error);
      });
  }
  addpatient = id => {
    const token = withAuth();

    axios
      .post(
        `https://immunization-tracker.herokuapp.com/api/patients`,
        this.state.newuser,
        token
      )
      .then(res => {
        this.setState({
          ...this.state.patients,
          patients: res.data.patients
        });
      })
      .catch(error => console.log(error));
  };
  selected = name => {
    this.state.patients.map(patient => {
      if (name === patient.firstName) {
        this.setState({
          ...this.state.patients,
          [this.state.patients.selected]: !patient.selected
        });

        patient.selected = !patient.selected;
      }
    });
  };
  handleInputChange = e => {
    this.setState({
      ...this.state,
      newuser: { ...this.state.newuser, [e.target.name]: e.target.value }
    });
    console.log(this.state.newuser);
  };
  render() {
    console.log("BEFORE PATIENTS:", this.state.patients);
    return (
      <div>
        <div>
          {this.state.patients.map(patient => {
            console.log(patient);
            return (
              <div>
                <MinCard
                  key={patient.name}
                  id={patient.id}
                  patient={patient}
                  selected={this.selected}
                  remove={this.removepatient}
                />
              </div>
            );
          })}
        </div>
        <Form className="addpatientform">
          <Form.Input
            onChange={this.handleInputChange}
            value={this.state.newuser.firstName}
            name="firstName"
            label="first name"
          />
          <Form.Input
            onChange={this.handleInputChange}
            value={this.state.newuser.LastName}
            name="lastName"
            label="lastname"
          />
          <Form.Input
            onChange={this.handleInputChange}
            value={this.state.newuser.gender}
            name="gender"
            label="gender"
          />
          <Form.Input
            onChange={this.handleInputChange}
            value={this.state.newuser.dateOfBirth}
            name="dateOfBirth"
            label="DOB"
            type="date"
          />
          <button onClick={() => this.addpatient()}>add</button>
        </Form>
      </div>
    );
  }
}

export default cardview;
