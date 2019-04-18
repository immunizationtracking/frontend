import axios from "axios";

export default () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  };
};
