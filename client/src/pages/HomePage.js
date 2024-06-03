import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Row, Input } from "antd";
import DoctorList from "../components/DoctorList";
import "../styles/Home.css"; // Import home.css

const HomePage = () => {
    const [doctors, setDoctors] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    const getUserData = async () => {
        try {
            const res = await axios.get("/api/v1/user/getAllDoctors", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });
            if (res.data.success) {
                setDoctors(res.data.data);
                setFilteredDoctors(res.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    const handleSearch = (value) => {
        setSearchTerm(value);
        filterDoctors(value);
    };

    const filterDoctors = (term) => {
        const filtered = doctors.filter((doctor) =>
            doctor.specialization.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredDoctors(filtered);
    };

    return (
        <Layout>
            <div className="homepage">
                <h1 className="text-center home">Home Page</h1>
                <div className="input-wrapper">
                        <Input
                            className="custom-search-input"
                            placeholder="Search by specialization"
                            value={searchTerm}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                    <button className="custom-search-button">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <Row>
                    {filteredDoctors.map((doctor) => (
                        <DoctorList key={doctor.id} doctor={doctor} />
                    ))}
                </Row>
            </div>
        </Layout>
    );
};

export default HomePage;
