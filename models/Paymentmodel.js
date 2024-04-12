const mongoose = require("mongoose");

const paymentschema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    doctorId: {
        type: String,
        required: true,
    },
    doctorInfo: {
        type: String,
        required: true,
    },
    userInfo: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: "unpaid",
    },
    time: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const paymentmodel = mongoose.model("payment", paymentschema);

module.exports = paymentmodel;