const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "email is required"],
    },
    code: {
        type: String,
    },
    exp: {
        type: Number,
    },
});

const otp = mongoose.model("otp", otp);

module.exports = otp;