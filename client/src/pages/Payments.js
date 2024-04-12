import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import moment from "moment";
import { Table } from "antd";

const Payment = () => {
    const [payment, setpayment] = useState([]);

    const getpayment = async() => {
        try {
            const res = await axios.get("/api/v1/user/user-payment", {
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

    const columns = [
        // {
        //   title: "ID",
        //   dataIndex: "_id",
        // },
        {
            title: "Name",
            dataIndex: "name",
            render: (text, record) => ( <
                span > { record.doctorInfo.firstName } { record.doctorInfo.lastName } <
                /span>
            ),
        },
        // {
        //   title: "Phone",
        //   dataIndex: "phone",
        //   render: (text, record) => <span>{record.doctorInfo.phone}</span>,
        // },
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

export default Payment;