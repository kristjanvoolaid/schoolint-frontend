import axios from "axios";
import config from "../config";
import authHeader from "./AuthHeader";

export default function AuthRole() {
    
    return axios({
        method: "GET",
        url: "http://localhost:3001" + "/users/role",
        headers: authHeader()
    })
    .then(response => response)
    .then(result => result.data.role)
    .catch(error => console.log(error));
};