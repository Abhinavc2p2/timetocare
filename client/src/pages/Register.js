import React from "react";
import { Form, Input, Button, message ,Card} from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import "../styles/RegiserStyles.css";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Successful!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };

  const navigateTologin = () => {
    navigate("/login");
};

  return (
    <div className="register-container">
      <div className="form-container">
        <Card className="login-card">

        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Register Form</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" placeholder="Enter your name" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" placeholder="Enter your email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" placeholder="Enter your password" required />
          </Form.Item>
          <Link to="/login" className="login-link">
            Already a user? Login here
          </Link>
          <Button className="btn-primary" type="primary" htmlType="submit">
            Register
          </Button>
        </Form>
          </Card>
      </div>
      <div className="black-background">
                <img src='https://imgs.search.brave.com/AAzZUituoS6e_fIHZQtniGY6Zd2erDSWnwQt_8GGbE0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/NS9Eb2N0b3ItRnJl/ZS1QTkctSW1hZ2Uu/cG5n' alt="Statue" className="statue-image" />
      <h2 className="logoo">TimetoCare</h2>
                <h2 className="welcome-back-text">Welcome back to YourWebsite</h2>
               
                <Button className="register-button" type="primary" size="large" onClick={navigateTologin}>
                  Login
                </Button>
            </div>
    </div>
  );
};

export default Register;
