import axios from 'axios';
import config from "../config";

const login = (email, password) => {
    return axios
        .post(config.API_URL + "/users/login", {
            email,
            password
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.stringify(localStorage.getItem("user"));
};

const AuthService = {
    login,
    logout,
    getCurrentUser,
};

export default AuthService;