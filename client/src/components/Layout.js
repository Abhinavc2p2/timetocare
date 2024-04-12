import React, { useState } from "react";
import "../styles/LayoutStyles.css";
import { adminMenu, userMenu } from "./../Data/data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, message } from "antd";

const Layout = ({ children }) => {
    const { user } = useSelector((state) => state.user);
    const location = useLocation();
    const navigate = useNavigate();

    // Define state for the sidebar
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Function to toggle the sidebar's visibility
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // logout function
    const handleLogout = () => {
        localStorage.clear();
        message.success("Logout Successfully");
        navigate("/login");
    };

    // =========== doctor menu ===============
    const doctorMenu = [{
            name: "Home",
            path: "/",
            icon: "fa-solid fa-house",
        },
        {
            name: "Appointments",
            path: "/doctor-appointments",
            icon: "fa-solid fa-list",
        },

        {
            name: "Payment Status",
            path: "/docpayment",
            icon: "fa-solid fa-Money",
        },
        {
            name: "Profile",
            path: `/doctor/profile/${user?._id}`,
            icon: "fa-solid fa-user",
        },
    ];
    // =========== doctor menu ===============

    // Rendering menu list
    const SidebarMenu = user && user.isAdmin ? adminMenu : user && user.isDoctor ? doctorMenu : userMenu;

    return ( <
        >
        <
        div className = { `main ${sidebarOpen ? "sidebar-open" : ""}` } >
        <
        div className = "main" >
        <
        div className = "layout" >
        <
        div className = "sidebar" >
        <
        div className = "logo" >
        <
        h6 className = "text-black bold" > Time to Care < /h6> <
        hr / >
        <
        /div>



        <
        div className = "menu" > {
            SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return ( <
                    div key = { menu.name }
                    className = { `menu-item ${isActive && "active"}` } >
                    <
                    i className = { menu.icon } > < /i> <
                    Link to = { menu.path } > { menu.name } < /Link> < /
                    div >
                );
            })
        } <
        div className = { `menu-item ` }
        onClick = { handleLogout } >
        <
        i className = "fa-solid fa-right-from-bracket" > < /i> <
        Link to = "/login" > Logout < /Link> < /
        div > <
        /div> < /
        div > <
        div className = "content" >

        <
        div className = "header" >


        <
        button className = "toggle-sidebar"
        onClick = { toggleSidebar } >
        <
        i className = "fa-solid fa-bars" > < /i> < /
        button >

        <
        div className = "welcome " > < span className = "wel" > Time to Care < /span> Reminds Always be Happy</div >
        <
        div className = "header-content"
        style = {
            { cursor: "pointer" }
        } >
        <
        Badge count = { user && user.notifcation.length }
        onClick = {
            () => {
                navigate("/notification");
            }
        } >
        <
        i class = "fa-solid fa-bell" > < /i> < /
        Badge >


        <
        Link to = "/profile" > { user && user.name } <
        /Link> < /
        div > <
        /div> <
        div className = "body" > { children } < /div> < /
        div > <
        /div> < /
        div > <
        /div> < / >
    );
};

export default Layout;