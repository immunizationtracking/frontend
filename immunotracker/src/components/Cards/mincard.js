import React from "react";
import "./mincard.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Maxcard from "./maxcard";
const MinCard = props => {
  return (
    <div className="small-card">
      <div className="top-small-info">
        <p>
          <strong>Name:</strong>
          {props.patient.name}
        </p>
        <p>
          <strong>Sex:</strong>
          {props.patient.sex}
        </p>
        <p>
          <strong>DOB:</strong>
          {props.patient.DOB}
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
    </div>
  );
};
export default MinCard;
