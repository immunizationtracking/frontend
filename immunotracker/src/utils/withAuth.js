import axios from "axios";
import jwt_decode from "jwt-decode";

export default () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  };
};
