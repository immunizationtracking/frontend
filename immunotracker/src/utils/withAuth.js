import axios from "axios";
import jwt_decode from "jwt-decode";

export default () => {
	const token = localStorage.getItem("token");
	const decoded = jwt_decode(token);

	return decoded;
};
