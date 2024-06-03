import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DoctorList.css";

const DoctorList = ({ doctor }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="card m-4 size" style={{ cursor: "pointer" }} onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}>
                <div className="card-header">
                    Dr. {doctor.firstName} {doctor.lastName}
                </div>
                <div className="card-body">
                    <table className="doctor-info-table">
                        <tbody>
                            <tr>
                                <td><b>Specialization</b></td>
                                <td>{doctor.specialization}</td>
                            </tr>
                            <tr>
                                <td><b>Experience</b></td>
                                <td>{doctor.experience}</td>
                            </tr>
                            <tr>
                                <td><b>Fees Per Consultation</b></td>
                                <td>{doctor.feesPerConsultation}</td>
                            </tr>
                            <tr>
                                <td><b>Pay here</b></td>
                                <td>{doctor.upiId}</td>
                            </tr>
                            <tr>
                                <td><b>Timings</b></td>
                                <td>{doctor.timings[0]} - {doctor.timings[1]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default DoctorList;
