import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await AuthService.login(email, password).then(
                () => {
                    navigate("/candidates");
                    window.location.reload();    
                },
                (error) => {
                    console.log(error);
                }
            )
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Form onSubmit={handleLogin}>
                <h3>Login</h3>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </Form>
        </div>
    )
}

export default Login;