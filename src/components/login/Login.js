import React, { useState } from "react";
import { Form, Button, Row, Col, Toast, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
import "../login/Login.css"; 

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState('');

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
                    setErr(error.message);
                }
            )
        } catch (error) {
            console.log(error);
        }
    };
    
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    return (
        <div>
        <Form onSubmit={handleLogin}>
            <br />
            <Row>
        <Form.Group as={Row} controlId="formGridEmail" className="mb-3">
        <Col sm={{span:6, offset:3}}>
            <Form.Label>E-postiaadress</Form.Label>
            <br />
                {/* <FloatingLabel controlId="floatingInput" label= "nimi@domeeninimi.ee"></FloatingLabel> */}
                    <Form.Control
                        type="text"
                        placeholder="E-mail" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        size="lg">
                        </Form.Control>
                </Col>
                </Form.Group>
               <br></br>
                
        <Form.Group as={Row} controlId="formGridPassword" className="mb-3">
        <Col sm={{span:6, offset:3}}>
            <Form.Label>Parool</Form.Label>
            {/* FloatingLabel on tore vidin, kogu FormControl peab olema selle sees */}
            {/* <FloatingLabel controlId="floatingPassword" label= "midagikeerulist"></FloatingLabel> */}
                    <Form.Control
                        type="password" 
                        placeholder="Salasõna" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        size="lg">
                        </Form.Control>
            </Col>
            </Form.Group>
            </Row>
            <br></br>
                <Col sm={{span:10, offset:8}}>
                <Button type="submit" className="btn" size = "lg" disabled={!validateForm()}>Logi sisse</Button>
                </Col>
                <Row>
                    {err && 
                        <Container>
                            <Row className="text-center">
                                <Col className="error_box">
                                    <span className="error_message">Sisselogimine ebaõnnestus! Proovige uuesti!</span>
                                </Col>
                            </Row>
                        </Container>
                    }
                </Row>
        </Form>
        </div>
    )
}

export default Login;