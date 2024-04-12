const express = require("express");
const {
    getDoctorInfoController,
    updateProfileController,
    getDoctorByIdController,
    doctorAppointmentsController,
    updateStatusController,
    doctorpaymentController,
    updatepaymentStatusController,
} = require("../controllers/doctorCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//POST SINGLE DOC INFO
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

//POST  GET SINGLE DOC INFO
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

//GET Appointments
router.get(
    "/doctor-appointments",
    authMiddleware,
    doctorAppointmentsController
);

router.get(
    "/docpayment",
    authMiddleware,
    doctorpaymentController
);

//POST Update Status
router.post("/update-status", authMiddleware, updateStatusController);
router.post("/update-paymentstatus", authMiddleware, updatepaymentStatusController);

module.exports = router;