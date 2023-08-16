import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        orgao: {
            type: String,
            required: true,
            min: 3,
            max: 50,
        },
        cidade: {
            type: String,
            require: true,
            min: 2,
        },
        estado: {
            type: String,
            required: true,
            min: 2,
        },
        email: {
            type: String,
            required: true,
            max: 4,
            unique: true,
        },
        passowrd: {
            type: String,
            required: true,
            min: 5,
        },
    },
    {timestamps: true}
);

const User = mongoose.model("User", UserSchema);
export default User;