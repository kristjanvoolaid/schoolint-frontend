import axios from "axios";
import authHeader from "./AuthHeader";
<<<<<<< HEAD
// import AuthService from "./AuthService";
=======
>>>>>>> 6695b3fd9da9e74e870c597fdf19ff0eaef4141d
import config from "../config";

let r;
const setUserRole = (role) => {
    console.log("Setting role to: " + role);
    r = role;
};

const getUserRole = () => {
    console.log("Getting role: " + r);
    return r;
};

const userRole = () => {
    let userRole;

    axios({
        method: "GET",
        url: config.API_URL + "/users/role",
        headers: authHeader()
    })
    .then(response => response)
    .then(result => userRole = result.data)
    .catch(error => console.log(error));

    return userRole;
}

const AuthRoleService = {
    userRole,
    setUserRole,
    getUserRole
};

export default AuthRoleService;
