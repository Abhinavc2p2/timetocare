import React from "react";
import { Form, Input, Button, message, Card } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import "../styles/LoginStyle.css";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinishHandler = async (values) => {
        try {
            dispatch(showLoading());
            const res = await axios.post("/api/v1/user/login", values);
            dispatch(hideLoading());
            if (res.data.success) {
                localStorage.setItem("token", res.data.token);
                message.success("Login Successfully");
                navigate("/");
            } else {
                message.error(res.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            console.log(error);
            message.error("something went wrong");
        }
    };

    const navigateToRegister = () => {
        navigate("/register");
    };

    return (
        <div className="login-container">

<div className="black-background">
                <h2 className="logo">TimetoCare</h2>
                <img src='https://imgs.search.brave.com/AAzZUituoS6e_fIHZQtniGY6Zd2erDSWnwQt_8GGbE0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/NS9Eb2N0b3ItRnJl/ZS1QTkctSW1hZ2Uu/cG5n' alt="Statue" className="statue-image" />
                <h2 className="welcome-back-text">New User Get Connected</h2>
               
                <Button className="register-button" type="primary" size="large" onClick={navigateToRegister}>
                    Register
                </Button>
            </div>
            <div className="form-container">
                <Card className="login-card">
                    <h2>Login Form</h2>
                    <Form layout="vertical" onFinish={onFinishHandler}>
                        <Form.Item label="Email" name="email">
                            <Input type="email" required />
                        </Form.Item>
                        <Form.Item label="Password" name="password">
                            <Input type="password" required />
                        </Form.Item>
                        <Button className="btn-primary" type="primary" htmlType="submit">
                            Login
                        </Button>
                       
                    </Form>
                </Card>
            </div>
           
        </div>
    );
};

export default Login;
