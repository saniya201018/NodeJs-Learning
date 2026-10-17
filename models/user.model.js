import mongoose from "mongoose";
//basic schema
// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String
// });

//mongoose validation
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: String,
    password: {
        type: String,
        // min: [18, "Minimum age 18"],
        // max: 50
    }
});

export const User = mongoose.model("User", userSchema);