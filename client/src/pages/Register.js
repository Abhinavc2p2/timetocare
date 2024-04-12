import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { GoogleLogin } from "react-google-login";
const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //form handler
    const onfinishHandler = async(values) => {
        try {
            dispatch(showLoading());
            const res = await axios.post("/api/v1/user/register", values);
            dispatch(hideLoading());
            if (res.data.success) {
                message.success("Register Successfully!");
                navigate("/login");
            } else {
                message.error(res.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            console.log(error);
            message.error("Something Went Wrong");
        }
    };

    const responseGoogleSuccess = async(response) => {
        try {
            dispatch(showLoading());

            // Send the Google access token to your server for verification
            const res = await axios.post("/api/v1/user/google-login", {
                tokenId: response.tokenId,
            });

            dispatch(hideLoading());

            if (res.data.success) {
                message.success("Login Successful!");
                navigate("/dashboard");
            } else {
                message.error(res.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            console.error(error);
            message.error("Something Went Wrong");
        }
    };

    const responseGoogleFailure = (error) => {
        console.error(error);
        message.error("Google Login Failed");
    };

    return ( <
        >
        <
        div className = "block " >

        <
        div class = "main-text" >
        <
        span class = "emphasize" > Register Yourself < /span> To<span class="emphasize"> TimeToCare</span > and Begin Your Journey to Better < span class = "emphasize" > Health < /span>! < /
        div >

        <
        div className = "form-container " >
        <
        Form layout = "vertical"
        onFinish = { onfinishHandler }
        className = "register-form" >

        <
        h3 className = "text-center" > Register From < /h3> <
        Form.Item label = "Name"
        name = "name" >
        <
        Input type = "text"
        required / >
        <
        /Form.Item> <
        Form.Item label = "Email"
        name = "email" >
        <
        Input type = "email"
        required / >
        <
        /Form.Item> <
        Form.Item label = "Password"
        name = "password" >
        <
        Input type = "password"
        required / >
        <
        /Form.Item>

        <
        Link to = "/login"
        className = "m-2" >
        Already user login here <
        /Link> <
        button className = "btn btn-primary"
        type = "submit" >
        Register <
        /button>






        <
        /Form> 

        <
        /div> < /
        div > <
        />
    );
};

export default Register;