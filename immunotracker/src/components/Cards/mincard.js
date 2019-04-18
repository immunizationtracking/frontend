import React from "react";
import "./mincard.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Maxcard from "./maxcard";
const MinCard = props => {
  return (
    <div
      className="small-card"
      onClick={() => props.selected(props.patient.name)}
    >
      <div className="top-small-info">
        <p>
          <strong>Name:</strong>
          {props.patient.firstName}
          {props.patient.lastName}
        </p>
        <p>
          <strong>Sex:</strong>
          {props.patient.gender}
        </p>
        <p>
          <strong>DOB:</strong>
          {props.patient.dateOfBirth.substr(0, 10)}
        </p>
      </div>
      <div className="bot-small-info">
        <p>
          <strong>MRN:</strong>
          {props.patient.MRN}
        </p>
        <p>
          <strong>Last Visited:</strong>
          {props.patient.last_visit}
        </p>
      </div>
      <div className="Vac-Info">
        <div
          className="Vac-name"
          style={
            props.patient.selected ? { display: "block" } : { display: "none" }
          }
        >
          <h2>Year 1</h2>
          <p>
            <strong>HEP B:</strong>
            <p>use passed information for HEP</p>
            <p>Did Doctor Sign</p>
          </p>
          <p>
            <strong> ORAL POLIO:</strong>
            <p>use passed information for POLIO</p>
            <p>Did Doctor Sign</p>
          </p>
          <p>
            <strong>BCG:</strong>
            <p>use passed information for BCG</p>
            <p>Did Doctor Sign</p>
          </p>
          <h4>6 weeks to 6 months</h4>
          <p>
            <strong>Oral Rotavirus:</strong>
            <p>use passed information for ORAL ROTAVIRUS</p>
            <p>Did Doctor Sign</p>
          </p>
          <p>
            <strong>DTP:</strong>
            <p>use passed information for DTP</p>
            <p>Did Doctor Sign</p>
          </p>
          <p>
            <strong>HIB:</strong>
            <p>use passed information for HIB</p>
            <p>Did Doctor Sign</p>
          </p>
          <p>
            <strong>HEP B:</strong>
            <p>use passed information for HEP B</p>
            <p>Did Doctor Sign</p>
          </p>
          <p>
            <strong>ORAL POLIO:</strong>
            <p>use passed information for ORAL POLIO</p>
            <p>Did Doctor Sign</p>
          </p>
          <p>
            <strong>INJECTABLE POLIO:</strong>
            <p>use passed information for INJECTABLE POLIO</p>
            <p>Did Doctor Sign</p>
          </p>
          <p>
            <strong>PNEUMOCOCCAL:</strong>
            <p>use passed information for PNEUMOCOCCAL</p>
            <p>Did Doctor Sign</p>
          </p>
          <h4>7 months to 12 months</h4>
          <p>
            <strong>FLU:</strong>
            <p>use passed information for FLU</p>
            <p>Did Doctor Sign</p>
          </p>
          <p>
            <strong>MEASLES:</strong>
            <p>use passed information for MEASLES</p>
            <p>Did Doctor Sign</p>
          </p>
          <h2>Year 2</h2>
          <p>
            <strong>HEP A:</strong>
            <p>use passed information for HEPATITIS A</p>
            <p>Did Doctor Sign</p>
          </p>
          <p>
            <strong>MMR:</strong> <p>use passed information for MMR</p>
            <p>Did Doctor Sign</p>
          </p>
          <p>
            <strong>CHICKENPOX:</strong>
            <p>use passed information for CHICKENPOX</p>
            <p>Did Doctor Sign</p>
          </p>
          <p>
            <strong>DTP:</strong>
            <p>use passed information for DTP</p>
            <p>Did Doctor Sign</p>
          </p>
          <p>
            <strong>HIB:</strong>
            <p>use passed information for HIB</p>
            <p>Did Doctor Sign</p>
          </p>
          <button onClick={props.remove}>Remove</button>
        </div>
      </div>
    </div>
  );
};
export default MinCard;
