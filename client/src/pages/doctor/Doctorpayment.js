import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";

import axios from "axios";

import moment from "moment";
import { message, Table } from "antd";

const Doctorpayment = () => {
    const [payment, setpayment] = useState([]);

    const getpayment = async() => {
        try {
            const res = await axios.get("/api/v1/doctor//docpayment", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            if (res.data.success) {
                setpayment(res.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getpayment();
    }, []);

    const handleStatus = async(record, status) => {
        try {
            const res = await axios.post(
                "/api/v1/doctor/update-status", { paymentId: record._id, status }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            if (res.data.success) {
                message.success(res.data.message);
                getpayment();
            }
        } catch (error) {
            console.log(error);
            message.error("Something Went Wrong");
        }
    };

    const columns = [{
            title: "ID",
            dataIndex: "_id",
        },
        {
            title: "Date & Time",
            dataIndex: "date",
            render: (text, record) => ( <
                span > { moment(record.date).format("DD-MM-YYYY") } & nbsp; { moment(record.time).format("HH:mm") } <
                /span>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
        },
        {
            title: "Actions",
            dataIndex: "actions",
            render: (text, record) => ( <
                div className = "d-flex" > {
                    record.status === "unpaid" && ( <
                        div className = "d-flex" >
                        <
                        button className = "btn btn-success"
                        onClick = {
                            () => handleStatus(record, "Payment received")
                        } >
                        Approved <
                        /button> <
                        button className = "btn btn-danger ms-2"
                        onClick = {
                            () => handleStatus(record, "Not received")
                        } >
                        Reject <
                        /button> < /
                        div >
                    )
                } <
                /div>
            ),
        },
    ];
    return ( <
        Layout >
        <
        h1 > Payment Lists < /h1> <
        Table columns = { columns }
        dataSource = { payment }
        /> < /
        Layout >
    );
};

export default Doctorpayment