import axios from 'axios';

const API_URL = "http://127.0.0.1:3001/users";

const login = (email, password) => {
    return axios
        .post(API_URL + "/login", {
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
    getCurrentUser
};

export default AuthService;